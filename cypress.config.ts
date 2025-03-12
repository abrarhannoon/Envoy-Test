import { defineConfig } from "cypress";

module.exports = defineConfig({
  e2e: {
    "baseUrl": "https://admin.radixtechs.net",

    async setupNodeEvents(on, config) {
      // implement node event listeners here
      return require("./cypress/plugins")(on, config);
    },
    specPattern: "cypress/e2e/*.feature",
    supportFile: 'cypress/support/commands.ts',
  },
});
