define(['angularAMD', 'angular-ui-router'], function(angularAMD) {
  var app = angular.module('amd-demo', ['ui.router']);
  app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('page1', angularAMD.route({
        url: '/page1',
        templateUrl: 'views/page1.html',
        controller: 'controller_1',
        controllerUrl: 'js/controller-1.js'
      }))
    .state('page2', angularAMD.route({
        url: '/page2',
        templateUrl: 'views/page2.html',
        controller: 'controller_2',
        controllerUrl: 'js/controller-2.js'
      }))
    .state('page3', angularAMD.route({
        url: '/page3',
        templateUrl: 'views/page3.html',
        controller: 'controller_3',
        controllerUrl: 'js/controller-3.js'
      }));

    $urlRouterProvider.otherwise('/page1');
    });
  return angularAMD.bootstrap(app);
  });
