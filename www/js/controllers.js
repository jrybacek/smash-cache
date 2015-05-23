angular.module('starter.controllers', [])

.controller('DashboardCtrl', function($scope, $ionicPopover) {
	$scope.gamePaceList = [
		{ text: 'Slow', value: 'slow' },
		{ text: 'Medium', value: 'medium' },
		{ text: 'Fast', value: 'fast' }
	];
	$scope.data = {
		gamePace: 'medium'
  };
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
