const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

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