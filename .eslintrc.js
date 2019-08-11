module.exports = {
  env: {
    browser: true
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  /* globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  }, */
  rules: {
    "no-console": "off"
  }
};
