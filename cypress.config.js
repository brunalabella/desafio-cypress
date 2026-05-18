const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
 
module.exports = defineConfig({
  e2e: {
 
    // tamanho da tela
    viewportWidth: 1920,
    viewportHeight: 1080,
 
    // não reiniciar testes automaticamente
    watchForFileChanges: false,
 
    // busca arquivos .feature
    specPattern: "cypress/e2e/**/*.feature",
 
    // site que irá ser automatizado
    baseUrl:"https://www.automationexercise.com",
 
    async setupNodeEvents(on, config) {
 
      // ✅ plugin correto do cucumber
      await addCucumberPreprocessorPlugin(on, config);
 
      // ✅ bundler obrigatório (sem isso quebra)
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
 
      return config;
    },
 
  },
});