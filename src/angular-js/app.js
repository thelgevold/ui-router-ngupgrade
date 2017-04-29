angular.module('awesome', ['ui.router']);

angular.module('awesome').config(['$stateProvider', '$locationProvider',
  function($stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/src/angular-js/home/home.html'
      })
      .state('cars', {
        url:'/cars',
        //Used to clear out ui-view when the angular router is activated
        template: ''
      })
      .state('friends', {
        url: '/friends',
        templateUrl: '/src/angular-js/friends/friends.html'
    });
}]);

