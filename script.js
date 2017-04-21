	/*global angular */
	/*eslint-disable radix */
	var app = angular.module('myApp', []);

	app.controller('myCtrl', function($scope) {
		$scope.board = [];
		$scope.board[0] = ["0", "0", "0"];
		$scope.board[1] = ["0", "0", "0"];
		$scope.board[2] = ["0", "0", "0"];

		var col;
		var row;
		var counter = 2;

		$scope.rowClick = function(index) {
			row = index;
			console.log('row found');
		};

		$scope.colClick = function(index) {
			col = index;
			console.log('col found');
		};

		$scope.xOrO = function(curEvent) {
			if (parseInt($scope.board[row][col]) === 0) {
				if (counter % 2 === 0) {
					$scope.board[row][col] = 1;
					curEvent.target.innerHTML = 'X';
				} else {
					$scope.board[row][col] = -1;
					curEvent.target.innerHTML = 'O';
				}
				if (victoryCheck() === false) {
					counter++;
				} else {
					if (counter % 2 === 0) {
						window.alert("X Won!");
					} else {
						window.alert("O Won!");
					}
				}
			}
		};

		function victoryCheck() {
			var win = false;
			var curTotal = 0;
			for (var chkRow = 0; chkRow < 4; chkRow++) {
				for (var chkCol = 0; chkCol < 4; chkCol++) {
					curTotal += parseInt($scope.board[chkRow][chkCol]);
				}
				if (curTotal === 3 || curTotal === -3){
					win = true;
				}
			}
			return win;
		}
	});