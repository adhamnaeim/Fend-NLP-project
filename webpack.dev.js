const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports ={
    mode: "development",
    entry: "./src/client/index.js", //changed the default entry point from ./src/index.js
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude:/node_modules/,    //babel loader rules
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ] //turning sass to css to style. inserting '' in the test causes an error unlike babel loader
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'My App',
          template: './src/client/views/index.html',
          filename: './index.html'
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
    })
      ],
}