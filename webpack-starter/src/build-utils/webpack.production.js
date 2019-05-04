const webpack = require('webpack');
const pkg = require('../../package');
const glob = require('glob-all');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = () => ({

    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|ttf|eot|svg|woff)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            }
        ]
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),

        new PurgecssPlugin({
            paths: glob.sync(['./src/js/*.js', './templates/*.php', './templates/**/*.php'])
        }),

        new FileManagerPlugin({
            onStart: {
                delete: ['./build']
            },

            onEnd: {
                copy: [
                    {source: './assets', destination: './build/assets'},
                    {source: './includes', destination: './build/includes'},
                    {source: './templates', destination: './build/templates'},
                    {source: './*.php', destination: './build'}
                ],

                archive: [
                    {source: './build', destination: `./build/${pkg.name}-${pkg.version}.zip`}
                ]
            }
        })
    ]

});