/**
 * Created by chang on 2017/7/1.
 */
const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets:['es2015','react']
                }
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!postcss-loader!less-loader',
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!postcss-loader'
            },
            {
                test: /\.(png|gif|jpg|jpeg|bmp)$/i,
                loader: 'url-loader?limit=5000'
            },
            {
                test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
                loader: 'url-loader?limit=5000'
            }
        ]
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({
            postcss () {
                return [ require('autoprefixer') ];
            }
        }),

        new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        }),

        new webpack.HotModuleReplacementPlugin(),

        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV === 'dev') || 'false'))
        })
    ],

    devServer: {
        inline: true,
        hot: true
    }

};

