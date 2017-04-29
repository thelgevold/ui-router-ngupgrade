angular.module('awesome').component('friendsComponent', {
  templateUrl:'src/angular-js/friends/friends.component.html',
  controller: function () {
   
    var friends = ['Tim', 'Jack', 'Lisa'];

    this.friends = friends;
  }
});