define(['app'], function(app) {
  app.factory('BigService', [bigService]);

  function bigService() {
    return function() {
      alert("This wa lazy loaded");
    }
  }
});
