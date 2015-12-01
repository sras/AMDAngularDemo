define(['app'], function(app){
    app
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
