module.exports = {
  root: true,
  plugins: ["simple-import-sort"],
  extends: ["eslint:recommended", "prettier"],
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
  env: {
    node: true,
  },
};
