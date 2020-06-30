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
                test: /\.css$/,
                use: ["vue-style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    "vue-style-loader",
                    "css-loader",
                    {
                        // Auto import into all components
                        loader: "sass-loader",
                        options: {
                            prependData: `
                                 @import "@/styles/variables.scss";
                                `
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                use: ["file-loader"]
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
