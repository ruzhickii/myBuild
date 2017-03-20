const {resolve} = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    entry: {
        main: resolve(__dirname, '../src'),
        vendor: [
            'react',
            'react-dom',
            'react-router',
            'redux',
            'react-redux'
        ]
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: resolve(__dirname, '../dist/client'),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: [resolve(__dirname, '../src'), resolve(__dirname, "node_modules")],
                use: 'babel-loader',
            },
            {
                test: /.*\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                //camelCase: true,
                                minimize: true || {/* CSSNano Options */}
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                //camelCase: true,
                                minimize: true || {/* CSSNano Options */}
                            }
                        },
                    ]
                })
            },
            {
                test: /.*\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                //camelCase: true,
                                minimize: true || {/* CSSNano Options */}
                            }
                        },
                    ]
                })
            },
            {
                test: /.(png|jpg|jpeg|ico|gif|svg|woff|woff2|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'url-loader?limit=100000'
                    }
                ]
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
                '__DEV__': false,
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: true,
            minimize: true,
            sourceMap: false,
            output: {
                comments: false
            },
            compress: {
                warnings: false,
                properties: true,
                sequences: true,
                dead_code: true,
                conditionals: true,
                comparisons: true,
                evaluate: true,
                booleans: true,
                unused: true,
                loops: true,
                hoist_funs: true,
                cascade: true,
                if_return: true,
                join_vars: true,
                drop_console: true,
                drop_debugger: true,
                negate_iife: true,
                unsafe: true,
                hoist_vars: true,
                side_effects: true
            },
        }),
        // new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            async: true,
            children: true,
        }),
        new ExtractTextPlugin({
            filename: "[hash]/[contenthash]/[name].[chunkhash].css",
            allChunks: true,
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new HtmlWebpackPlugin({
            favicon: 'assets/favicon.ico',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            filename: 'index.html',
            title: 'ITTEAM',
            template: 'src/index.html',
        }),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            //test: /\.js$|\.html$|\.css$/,
            threshold: 10240,
            minRatio: 0.8
        }),
    ],
}
