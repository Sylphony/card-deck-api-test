var webpack = require("webpack");

module.exports = {
    entry: "./src/app/app.jsx",

    output: {
        path: __dirname,
        filename: "./src/app/build/app-build.js"
    },

    cache: true,
    
    module: {
        loaders: [
            { 
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ["es2015", "react"]
                }
            }
        ]
    },

    resolve: {
        extensions: ["", ".js", ".jsx"]
    },

    node: {
        fs: "empty",        // Fixes the node-fs issue
        __dirname: true     // Sets the true directory path
    }
};
