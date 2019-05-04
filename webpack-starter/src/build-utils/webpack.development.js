const path = require('path');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = () => ({

    output: {
        path: path.resolve(__dirname, '../../assets'),
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpe?g|png|gif|ttf|eot|svg|woff)$/,
                use: 'file-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: '/node_modules/'
            }
        ]
    }

});