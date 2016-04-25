module.exports = {
  "bundles": {
    "dist/app-build": {
      "includes": [
        "[app.js]",
        "[app.html!text]",
        "[main.js]",
        "[*/**/*.js]",
        "*/**/*.html!text",
        "*/**/*.css!text"
      ],
      "options": {
        "indexFile" : "index.html",
        "inject": true,
        "minify": true,
        "depCache": true,
        "rev": false
      }
    },
    "dist/aurelia": {
      "includes": [
        "aurelia-framework",
        "aurelia-bootstrapper",
        "aurelia-fetch-client",
        "aurelia-router",
        "aurelia-animator-css",
        "aurelia-templating-binding",
        "aurelia-polyfills",
        "aurelia-templating-resources",
        "aurelia-templating-router",
        "aurelia-loader-default",
        "aurelia-history-browser",
        "aurelia-logging-console",
        "aurelia-event-aggregator",
        "bootstrap",
        "admin-lte",
        "admin-lte/dist/css/AdminLTE.css!text",
        "admin-lte/dist/css/skins/skin-blue.css!text",
        "admin-lte/bootstrap/css/bootstrap.css!text",
        "select2",
        "select2/css/select2.css!text",
      ],
      "options": {
        "inject": true,
        "minify": true,
        "depCache": false,
        "rev": false
      }
    }
  }
};
