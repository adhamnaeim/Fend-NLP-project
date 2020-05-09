const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports ={
    mode: "development",
    entry: "./src/client/index.js", //changed the default entry point from ./src/index.js
    output: {
        libraryTarget:'var',
        library: 'Client'
    },
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
      ],
}