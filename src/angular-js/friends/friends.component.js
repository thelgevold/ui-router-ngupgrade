angular.module('awesome').component('friendsComponent', {
  templateUrl:'src/angular-js/friends/friends.component.html',
  controller: function () {
   
    this.friends = ['Tim', 'Jack', 'Lisa'];

    this.hello = function() {
      console.log('Hello World');
    }
  }
});