// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

// var app = angular.module("loginchat", ['ionic'], ['firebase'])

var app = angular.module('loginchat', ['ionic', 'firebase']) ;

/*
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

});

*/

app.controller('chatController', ['$scope', 'Message', function($scope, Message){
    $scope.name = "geekenchef";
    $scope.messages = Message.all;
    
    $scope.inserisci = function(message){
			Message.create(message);
		};
}]);

app.factory('Message', ['$firebase', function($firebase) {

var ref = new Firebase('https://slacking.firebaseio.com/');
var messages = $firebase(ref.child('messages')).$asArray();

var Message = {
        all : messages,
        create : function(message){
                return messages.$add(message);
                },
        get : function(messageId){
                return $firebase(ref.child('messages').child(messageId)).$asObject();
                },
        delete : function(message){
                return messages.$remove(message);
                    },
                };

    return Message;
}]);





