require.config({
  baseUrl: "js/",
  paths: {
    "angularAMD": "../bower_components/angularAMD/angularAMD",
    "BigService": "bigService",
    "scripts": "scripts"
  },
  shim: {
  },
  deps: ["scripts"]
});
