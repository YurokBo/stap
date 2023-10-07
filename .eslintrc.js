module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "plugin:vue/vue3-essential",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 6,
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
  plugins: ["vue"],
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/no-deprecated-v-on-native-modifier": "off",
    "vue/no-reserved-component-names": "off",
  },
};
