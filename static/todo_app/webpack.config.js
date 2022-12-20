const path = require('path');

module.exports = {
    // multiple entry points - https://github.com/webpack/docs/wiki/multiple-entry-points
    entry: {
        todo_app: ['babel-polyfill', path.resolve(__dirname, 'src/todo_app.tsx')],
    },

    output: {
        filename: 'bundle.[name].js'
    },

    // https://webpack.js.org/configuration/externals/
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        jquery: "jQuery",
        "toastr": "toastr"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "inline-source-map",

    module: {
        rules: [{
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader", "ts-loader"]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.(jsx|tsx)$/,
                loader: "source-map-loader"
            }
        ]
    },

    plugins: [],

    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
    }
};