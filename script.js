	/*global angular */
	/*eslint-disable radix */
	/*eslint-env jquery */
	var app = angular.module('myApp', []);

	app.controller('myCtrl', function($scope) {
		$scope.board = [];
		$scope.board[0] = [0, 0, 0];
		$scope.board[1] = [0, 0, 0];
		$scope.board[2] = [0, 0, 0];

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

					for (var chkCol = 0; chkCol < 3; chkCol++) {
						for (var chkRow = 0; chkRow < 3; chkRow++) {
							$scope.board[chkRow][chkCol] = 0;
							console.log($scope.board[chkRow][chkCol]);
						}
					}
					$("td.content").html("");
				}
			}
		};

		function victoryCheck() {
			var win = false;
			var curTotal = 0;
			var chkRow;
			var chkCol;
			for (chkRow = 0; chkRow < 3; chkRow++) {
				for (chkCol = 0; chkCol < 3; chkCol++) {
					curTotal += parseInt($scope.board[chkRow][chkCol]);
				}
				if (curTotal === 3 || curTotal === -3) {
					win = true;
				}
				curTotal = 0;
			}

			curTotal = 0;

			for (chkCol = 0; chkCol < 3; chkCol++) {
				for (chkRow = 0; chkRow < 3; chkRow++) {
					curTotal += parseInt($scope.board[chkRow][chkCol]);
				}
				if (curTotal === 3 || curTotal === -3) {
					win = true;
				}
				curTotal = 0;
			}

			curTotal = 0;

			if (diagVictoryCheck() === true) {
				win = true;
			}

			return win;
		}

		function diagVictoryCheck() {
			var diagWin = false;
			var diagTotal = 0;

			diagTotal = parseInt($scope.board[0][0]) + parseInt($scope.board[1][1]) + parseInt($scope.board[2][2]);
			if (diagTotal === 3 || diagTotal === -3) {
				diagWin = true;
				return diagWin;
			}
			diagTotal = parseInt($scope.board[0][2]) + parseInt($scope.board[1][1]) + parseInt($scope.board[2][0]);
			if (diagTotal === 3 || diagTotal === -3) {
				diagWin = true;
				return diagWin;
			}
			return diagWin;

		}
	});