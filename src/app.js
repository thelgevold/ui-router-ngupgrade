angular.module('awesome', ['ui.router']);

angular.module('awesome').config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $urlRouterProvider
  
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/src/home/home.html'
    })
    .state('cars', {
      url:'/cars',
      //Used to clear out ui-view when the angular router is activated
      template: ''
    })
    .state('friends', {
      url: '/friends/:name',
      templateUrl: '/src/friends/friends.html'
    });
});

