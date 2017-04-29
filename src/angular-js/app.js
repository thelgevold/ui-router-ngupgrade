angular.module('awesome', ['ui.router']);

angular.module('awesome').config(['$stateProvider', '$locationProvider',
  function($stateProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/src/angular-js/home/home.html'
      })
      // Define empty templates for routes controlled by new angular router
      // Needed to clear out the ui-router view after transitioning
      .state('spreadsheet', {
        url:'/spreadsheet',
        template: ''
      })
      .state('treeview', {
        url:'/treeview',
        template: ''
      })
      .state('survey', {
        url:'/survey',
        template: ''
      })
      .state('friends', {
        url: '/friends',
        templateUrl: '/src/angular-js/friends/friends.html'
    });
}]);

