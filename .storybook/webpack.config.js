const path = require("path")

module.exports = {
    // Add loaders for certain file types
    module: {
        rules: [
            // Load SVGs
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
            // Allow scss styles
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

    // Auto import SCSS files into each component
    // css: {
    //     loaderOptions: {
    //         sass: {
    //             data: `
    //                 @import "@/styles/variables.scss";
    //             `
    //         }
    //     }
    // }
}
