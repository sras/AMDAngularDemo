require.config({
  baseUrl: "js/",
  paths: {
    // angularAMD required to load via require.js because we
    // need it as an argument in app.js
    "angularAMD": "../bower_components/angularAMD/angularAMD",
    // This is a sample service which will be lazy loaded
    "BigService": "bigService",
    // This the counterpart of the current scripts.js
    "scripts": "scripts"
  },
  shim: {
  },
  // The below line tells require.js to execute "scripts" module
  // once all the dependencies(none in this case) have loaded.
  deps: ["scripts"]
});
