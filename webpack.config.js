const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    "mode": "development",
    "entry": "./src/index.js",
    "output": {
        "path": path.resolve(__dirname, 'dist'),
        "filename": "bundle.js",
        "publicPath": "/"
    },
    "devServer": {
        "contentBase": './dist',
        "historyApiFallback": true
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
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ]
};