const path = require("path")
const webpack = require("webpack")

module.exports ={
    entry: "./src/client/index.js", //changed the default entry point from ./src/index.js
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude:/node_modules/,    //babel loader rules
                loader: "babel-loader"
            }
        ]
    }
}