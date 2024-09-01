module.exports = {
  extends: ['airbnb-base'],
  env: {
      browser: true,
      node: true,
      es2021: true,
  },
  parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
  },
  rules: {
      "no-console": "off",
      "class-methods-use-this": "off",
      "import/first": "off"
  },
};
