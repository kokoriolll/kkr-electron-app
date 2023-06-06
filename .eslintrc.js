module.exports = {
    files: ['*.ts', '*.tsx', '*.js', '*.jsx', '*.vue', '*.cjs'],
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-essential",
        '@vue/eslint-config-airbnb'
    ],
    parserOptions: {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    plugins: [
        "@typescript-eslint",
        "vue"
    ],
    rules: {
    }
}
