define(['app', 'BigService'], function(app) {
    app.controller('controller_3', ['$scope', 'BigService', function($scope, BigService) {
        $scope.content = "controller_3";
        $scope.press = BigService;
        }]);
  });
