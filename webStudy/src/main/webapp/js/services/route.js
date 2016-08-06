var myApp = angular.module('myApp', [
  'ngMaterial',
  'ui.router',
  'ngMessages'
]);

myApp.config(function($stateProvider, $urlRouterProvider) {

  // 맞지 않는 모든 URL에 대해 redirect to /deshBoard
  $urlRouterProvider.otherwise("/");

  // SET UP states
  $stateProvider
  .state('main', {
    url: "/main",
    templateUrl: "views/main.html",
    controller: "mainCtrl"
  })
  
});