const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    viewportWidth: 1280,
    viewportHeight: 800,
    video: false,
    retries: {
      runMode: 2,
      openMode: 0,
    },
  },
});
