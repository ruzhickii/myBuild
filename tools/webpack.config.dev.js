const {resolve} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: [
        'webpack-dev-server/client',
        'webpack/hot/only-dev-server',
        resolve(__dirname, '../src'),
    ],
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname),
        publicPath: '/',
    },
    resolve: {
        modules: ['node_modules']
    },
    context: resolve(__dirname, '../src'),
    devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
    devServer: {
        hot: true,
        host: 'localhost',
        port: '3000',
        contentBase: resolve(__dirname, '../assets'),
        publicPath: '/',
        historyApiFallback: true,
        noInfo: true,
        inline: true,
        clientLogLevel: "info",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: [resolve(__dirname, '../src'), resolve(__dirname)],
                use: 'babel-loader',
            },
            {
                test: /[\/\\](node_modules|bower_components|assets|src)[\/\\].*\.scss$/,
                use: [
                    'style-loader',
                    //'css-loader?importLoaders=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /[\/\\](node_modules|bower_components|assets|src)[\/\\].*\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ],
            },
            {
                test: /.(png|jpg|jpeg|ico|gif|svg|woff|woff2|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{loader: 'url-loader?limit=100000'}]
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"',
                '__DEV__': true,
            }
        }),
        new HtmlWebpackPlugin({
            favicon: '../assets/favicon.ico',
            title: 'Portal',
            template: '../src/index.html',
        }),
    ],
    performance: {hints: false},
};
