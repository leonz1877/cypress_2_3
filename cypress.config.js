const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "xodtw3",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
