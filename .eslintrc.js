module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["import-rules"],
  extends: [],
  rules: {
    "import-rules/import-rules": [2, { include: [], exclude: [] }],
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
