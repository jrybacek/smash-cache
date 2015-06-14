angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, PaceList, BudgetList) {

	// Create the settings modal that we will use later
  $ionicModal.fromTemplateUrl('templates/settings.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
	// Close the settings modal
  $scope.closeSettings = function() { $scope.modal.hide(); };
  // Open the settings modal
  $scope.openSettings = function() { $scope.modal.show(); };

	// Get default settings
	$scope.settings = {
		budget: BudgetList.getSelectedBudget(),
		pace: PaceList.getSelectedPace()
	}

	// Use a local variable to store the PaceList service
	$scope.paces = PaceList.paces;
	// Push selected pace back into PaceList service
	$scope.selectPace = function(pace) {
		PaceList.selectedPace = pace;
	}
	// Use a local variable to store the BudgetList service
	$scope.budgets = BudgetList.budgets;
	// Push selected pace back into BudgetList service
	$scope.selectBudget = function(budget) {
		BudgetList.selectedBudget = budget;
	}

})

.controller('TreasureCtrl', function($scope, Treasure, PaceList, BudgetList, MonsterList) {
	// Get local variables
	$scope.local = {
		budget: null,
		pace: null,
		monster: MonsterList.getSelectedMonster(),
		encounterLevel: null,
		showHelp: false
  };
	// Watch for changes in the selected pace
	$scope.$watch(PaceList.getSelectedPace, function(newObject, oldObject, scope) {
		scope.local.pace = newObject;
	});
	// Watch for changes in the selected budget
	$scope.$watch(BudgetList.getSelectedBudget, function(newObject, oldObject, scope) {
		scope.local.budget = newObject;
	});
	// Get treasure value function
	$scope.getTreasureValue = function() {
		return Treasure.get($scope.local.encounterLevel, $scope.local.pace.value) * $scope.local.budget.value;
	};
	// Toggle the help switch
	$scope.toggleHelp = function() {
		$scope.local.showHelp = !$scope.local.showHelp;
		return true;
	};
	// Use a local variable to store the MonsterList service
	$scope.monsters = MonsterList.monsters;
	// Push selected monster type back into MonsterList service
	$scope.selectMonster = function(monster) {
		MonsterList.selectedMonster = monster;
	}
});