angular.module('awesome', ['ui.router']);

angular.module('awesome').config(['$stateProvider', '$locationProvider',
  function($stateProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/src/angular-js/home/home.html'
      })
      .state('spreadsheet', {
        url:'/spreadsheet',
        template: ''
      })
      .state('treeview', {
        url:'/treeview',
        template: ''
      })
      .state('friends', {
        url: '/friends',
        templateUrl: '/src/angular-js/friends/friends.html'
    });
}]);

