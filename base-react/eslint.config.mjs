// import globals from "globals";
// import pluginJs from "@eslint/js";
// import pluginReact from "eslint-plugin-react";


// export default [
//   {files: ["**/*.{js,mjs,cjs,jsx}"]},
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
//   pluginReact.configs.flat.recommended,
// ];

import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import prettier from "eslint-config-prettier"; // Importar corretamente o prettier

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser, // Definir as opções de linguagem
    },
    rules: {
      // Configurações e regras adicionais podem ser adicionadas aqui
    },
  },
  pluginJs.configs.recommended, // Regras recomendadas para JavaScript
  pluginReact.configs.flat.recommended, // Regras recomendadas para React
  prettier, // Desabilitar regras que conflitam com o Prettier
];
