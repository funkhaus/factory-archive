const path = require("path")

module.exports = ({ config, mode }) => {
    config.module.rules.push({
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"]
    })

    // Extend it as you need.
    function resolve(dir) {
        return path.join(__dirname, "..", dir)
    }

    config.resolve = {
        extensions: [".js", ".vue", ".json"],
        alias: {
            vue$: "vue/dist/vue.esm.js",
            "@": resolve("src")
        }
    }

    return config
};
