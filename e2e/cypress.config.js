const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        supportFile: false,
        env: {
            "BASE_PATH": "http://localhost:9303",
    },
        video: false,
        screenshotOnRunFailure: false
    },
});
