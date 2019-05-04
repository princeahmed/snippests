const modeConfig = env => require(`./src/build-utils/webpack.${env}`)(env);
const webpackMerge = require('webpack-merge');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = ({mode} = {mode: 'development'}) => {

    return webpackMerge({
        mode,

        entry: {
            admin: './src/admin.js',
            frontend: './src/frontend.js'
        },

        plugins: [
            new cleanWebpackPlugin()
        ]

    }, modeConfig(mode));
};