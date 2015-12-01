// This file is the counter part of the curent scripts.js
// We have added the 'app' module as a dependency so app.js will
// be executed before this file starts executing. We do the module
// init and routes set up in app.js
define(['app'], function(){
    // the below line works because
    // the amd loader has replaced
    // the original angular object with a
    // patched version so that a request for
    // amd-demo module returns the lazy loading
    // enabled one.

    angular.module('amd-demo')
      .controller('controller_1', ['$scope', function($scope) {
      $scope.content = "controller_1";
      }])
      .controller('controller_2', ['$scope', function($scope) {
        $scope.content = "controller_2";
      }])
      .factory('PreloadedService', function() {
        return function() { alert('Preloaded') };
      });
});
