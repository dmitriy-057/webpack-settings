const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    module: {
        rules: [      
        {
            test: /\.scss$/i,
            use: ["style-loader",MiniCssExtractPlugin.loader,"css-loader", "sass-loader"],
        },

          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
        }
    ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: "src/index.html"}),
    new MiniCssExtractPlugin()
    ],
    devServer: {
        port: 4444,
        open: true,
        static: 'errors-only'
      },
   
};