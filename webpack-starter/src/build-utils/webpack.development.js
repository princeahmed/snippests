const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => ({

    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
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