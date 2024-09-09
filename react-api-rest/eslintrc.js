module.exports = {
  env: {
    browser: true,
    node: true,  // Adiciona suporte ao ambiente Node.js
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',  // Se você está usando ESM, mantenha como 'module'
  },
  rules: {
    "no-console": "off",
    "class-methods-use-this": "off",
    "import/first": "off"
  },
};
