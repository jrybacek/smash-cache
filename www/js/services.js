angular.module('starter.services', [])

.factory('PaceList', function() {
	var service = {};
	service.paces = [
		{ id: 1, title: 'Slow', value: 'slow' },
		{ id: 2, title: 'Medium', value: 'medium' },
		{ id: 3, title: 'Fast', value: 'fast' }
  ];
	// Select default pace, alternately use null if no default is necessary
	service.selectedPace = service.paces[1];
	service.getSelectedPace = function() { return service.selectedPace; };
	service.setSelectedPace = function(pace) { service.selectedPace = pace; };
	return service;
})

.factory('BudgetList', function() {
	var service = {};
	service.budgets = [
		{ id: 1, title: 'Incidental', value: 0.5 },
		{ id: 2, title: 'Standard', value: 1 },
		{ id: 3, title: 'Double', value: 2 },
		{ id: 4, title: 'Triple', value: 3 },
		{ id: 5, title: 'NPC Gear', value: 0 }
  ];
	// Select default pace, alternately use null if no default is necessary
	service.selectedBudget = service.budgets[1];
	service.getSelectedBudget = function() { return service.selectedBudget; };
	service.setSelectedBudget = function(budget) { service.selectedBudget = budget; };
	return service;
})

.factory('MonsterList', function() {
	var service = {};
	service.monsters = [
		{ id: 1, title: 'Aberration', value: [ 'A', 'B', 'D', 'E' ] },
		{ id: 2, title: 'Aberration (cunning)', value: [ 'A', 'B', 'D', 'E', 'F', 'G', 'H' ] },
		{ id: 3, title: 'Animal', value: [ 'A', 'B', 'D', 'E' ] },
		{ id: 4, title: 'Construct', value: [ 'E', 'F' ] },
		{ id: 5, title: 'Construct (if guarding treasure)', value: [ 'B', 'C', 'E', 'F', 'H' ] },
		{ id: 6, title: 'Dragon', value: [ 'A', 'B', 'C', 'H', 'I' ] },
		{ id: 7, title: 'Fey', value: [ 'B', 'C', 'D', 'G' ] },
		{ id: 8, title: 'Humanoid', value: [ 'A', 'B', 'D', 'E', 'F', 'G' ] },
		{ id: 9, title: 'Humanoid (entire community)', value: [ 'A', 'B', 'D', 'E', 'F', 'G', 'H' ] }
  ];
	// Select default pace, alternately use null if no default is necessary
	service.selectedMonster = service.monsters[7];
	service.getSelectedMonster = function() { return service.selectedMonster; };
	service.setSelectedMonster = function(monster) { service.selectedMonster = monster; };
	return service;
})

.factory('Treasure', function() {
	// reference external resource
	var treasure = [{
		encounterLevel: 1,
		slow: 170,
		medium: 260,
		fast: 400
  }, {
		encounterLevel: 2,
		slow: 350,
		medium: 550,
		fast: 800
  }, {
		encounterLevel: 3,
		slow: 550,
		medium: 800,
		fast: 1200
  }, {
		encounterLevel: 4,
		slow: 750,
		medium: 1150,
		fast: 1700
  }, {
		encounterLevel: 5,
		slow: 1000,
		medium: 1550,
		fast: 2300
  }, {
		encounterLevel: 6,
		slow: 1350,
		medium: 2000,
		fast: 3000
  }, {
		encounterLevel: 7,
		slow: 1750,
		medium: 2600,
		fast: 3900
  }, {
		encounterLevel: 8,
		slow: 2200,
		medium: 3350,
		fast: 5000
  }, {
		encounterLevel: 9,
		slow: 2850,
		medium: 4250,
		fast: 6400
  }, {
		encounterLevel: 10,
		slow: 3650,
		medium: 5450,
		fast: 8200
  }, {
		encounterLevel: 11,
		slow: 4650,
		medium: 7000,
		fast: 10500
  }, {
		encounterLevel: 12,
		slow: 6000,
		medium: 9000,
		fast: 13500
  }, {
		encounterLevel: 13,
		slow: 7750,
		medium: 11600,
		fast: 17500
  }, {
		encounterLevel: 14,
		slow: 10000,
		medium: 15000,
		fast: 22000
  }, {
		encounterLevel: 15,
		slow: 13000,
		medium: 19500,
		fast: 29000
  }, {
		encounterLevel: 16,
		slow: 16500,
		medium: 25000,
		fast: 38000
  }, {
		encounterLevel: 17,
		slow: 22000,
		medium: 32000,
		fast: 48000
  }, {
		encounterLevel: 18,
		slow: 28000,
		medium: 41000,
		fast: 62000
  }, {
		encounterLevel: 19,
		slow: 35000,
		medium: 53000,
		fast: 79000
  }, {
		encounterLevel: 20,
		slow: 44000,
		medium: 67000,
		fast: 100000
	}];
  return {
    all: function() {
      return treasure;
    },
    remove: function(encounterLevel) {
      treasure.splice(treasure.indexOf(encounterLevel), 1);
    },
    get: function(encounterLevel, pace) {
			var rtnVal = 0;
      for (var i = 0; i < treasure.length; i++) {
        if (treasure[i].encounterLevel === parseInt(encounterLevel)) {
					if (pace != '') {
						// console.log('encounterLevel: ' + encounterLevel + ', pace: ' + pace + ', returnValue: ' + treasure[i][pace]);
						return treasure[i][pace];
					}
        }
      }
      return null;
    }
  };
});
