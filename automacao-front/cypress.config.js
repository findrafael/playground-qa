const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'reports',
      overwrite: false,
      html: true,
    },
    video: true,
    videosFolder: 'reports/videos',
    baseUrl: 'https://v0-nexus-formulario-tfzdrq.vercel.app/',
    setupNodeEvents(on, config) {
    },
  },
});
