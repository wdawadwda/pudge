module.exports = {
  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks",
    "prettier",
    "import",
    "typescript",
  ],
  rules: {
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/type-annotation-spacing": "error",
    "prettier/prettier": "error",
    "typescript/prefer-function-type": "off",
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
