const path = require("path")

module.exports = {
    // Add loaders for certain file types
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: [
                    "babel-loader",
                    {
                        loader: "vue-svg-loader",
                        options: {
                            svgo: {
                                plugins: [{ removeViewBox: false }]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: ["vue-style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    // Add path alias mapped to @/src directory
    resolve: {
        extensions: [".js", ".vue", ".json"],
        alias: {
            vue$: "vue/dist/vue.esm.js",
            "@": path.join(__dirname, "..", "src")
        }
    }
}
