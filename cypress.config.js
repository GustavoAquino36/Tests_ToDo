const { defineConfig } = require("cypress");
const dotenv = require('dotenv')
const env = dotenv.config('./.env').parsed

module.exports = defineConfig({
  e2e: {
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
    }
  },
});