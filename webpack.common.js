const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    "entry": "./src/index.js",
    "output": {
        "path": path.resolve(__dirname, 'dist'),
        "filename": "bundle.js",
    },
    "module": {
        "rules": [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                "test": /\.css$/,
                "use": [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images'
                    }
                }
            }
        ]
    },
    "plugins": [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'React ecommerce'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ]
};