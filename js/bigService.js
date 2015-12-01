define(['app'], function(app) {
  app.factory('BigService',  ['PreloadedService',  bigService]);

  function bigService(preloaded) {
    return function() {
      alert("This wa lazy loaded");
      preloaded();
    }
  }
});
