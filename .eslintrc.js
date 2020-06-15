module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ["eslint:recommended", "plugin:vue/recommended", "@vue/prettier"],
    parserOptions: {
        parser: "babel-eslint"
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        indent: ["error", 4, { SwitchCase: 1 }],
        "vue/html-indent": ["error", 4],
        semi: [2, "never"]
    },
    overrides: [
        {
            files: ["src/**/*.test.js"],
            env: {
                jest: true
            }
        }
    ]
}
