require.config({
  baseUrl: "js/",
  paths: {
    "angular": "../bower_components/angular/angular",
    "angular-ui-router": "../bower_components/angular-ui-router/release/angular-ui-router.min",
    "angularAMD": "../bower_components/angularAMD/angularAMD"
  },
  shim: {
    "angular-ui-router":["angular"]
  },
  deps: ["app"]
});
