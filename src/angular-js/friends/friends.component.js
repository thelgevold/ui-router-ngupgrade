angular.module('awesome').component('friendsComponent', {
  templateUrl:'src/angular-js/friends/friends.component.html',
  controller: function ($stateParams) {
    this.message = $stateParams.name;

    var friends = ['Tim', 'Jack', 'Lisa'];

    if($stateParams.name === 'Joe') {
      friends = ['Peter', 'Joe', 'Jenny'];
    }

    this.friends = friends;
  }
});