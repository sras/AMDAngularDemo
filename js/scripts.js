angular.module('amd-demo', ['ui.router'])
  .controller('controller_1', ['$scope', function($scope) {
  $scope.content = "controller_1";
  }])
  .controller('controller_2', ['$scope', function($scope) {
    $scope.content = "controller_2";
  }]);
