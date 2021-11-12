const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './app/main.js',
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    module: {
        rules: [{
            test: /\.scss$/i,
            use: [
                MiniCssExtractPlugin.loader,

                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'data')
        },
        port: 8004,
        compress: true
    }
}