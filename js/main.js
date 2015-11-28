require.config({
  baseUrl: "js/",
  paths: {
    "angular": "../bower_components/angular/angular",
    "angular-route": "../bower_components/angular-route/angular-route",
    "angularAMD": "../bower_components/angularAMD/angularAMD"
  },
  shim: {
    "angular-route": ["angular"]
  },
  deps: ["app"]
});
