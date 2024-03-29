const { ignorePatterns, env } = require("./base-config");

module.exports = {
  env,
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  ignorePatterns,
  rules: {
    "@typescript-eslint/no-extra-semi": "off",
    "object-curly-spacing": ["error", "always"],
    "key-spacing": [
      "error",
      { singleLine: { beforeColon: false, afterColon: true } },
    ],
    "@typescript-eslint/no-explicit-any": 0,
  },
};
