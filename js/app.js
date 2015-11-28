define(['angularAMD', 'angular-route'], function(angularAMD) {
  console.log(angularAMD);
  var app = angular.module('amd-demo', ['ngRoute']);
  app.config(function($routeProvider) {
    $routeProvider.when('page1', angularAMD.route({
        templateUrl: 'views/page1.html',
        controller: 'controller_1',
        controllerUrl: 'js/controller-1.js'
      }))
    .when('page2', angularAMD.route({
        templateUrl: 'views/page2.html',
        controller: 'controller_2',
        controllerUrl: 'js/controller-2.js'
      }))
    .when('/page3', angularAMD.route({
        templateUrl: 'views/page3.html',
        controller: 'controller_3',
        controllerUrl: 'js/controller-3.js'
      }))
    .otherwise({
        redirectTo: "page1"
      });
    })
  .run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeError', function() {
      console.log("Change");
      });
    }]);
  console.log(angularAMD.bootstrap);
  return angularAMD.bootstrap(app);
  });
