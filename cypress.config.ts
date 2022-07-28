const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://www.gamesforthebrain.com/game/checkers/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*', '**/firstTest.spec/*']
  }
})  