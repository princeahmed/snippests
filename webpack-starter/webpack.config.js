const path = require('path');
const modeConfig = env => require(`./src/build-utils/webpack.${env}`)(env);
const webpackMerge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = ({mode} = {mode: 'development'}) => {

    return webpackMerge({
        mode,

        entry: {
            admin: './src/admin.js',
            frontend: './src/frontend.js'
        },

        output: {
            path: path.resolve(__dirname, './assets'),
            filename: '[name].min.js'
        },

        plugins: [
            new cleanWebpackPlugin(),
            new MiniCssExtractPlugin({filename: '[name].min.css'})
        ]

    }, modeConfig(mode));
};