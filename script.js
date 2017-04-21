/*global angular */
var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope) {
	$scope.board = [];
	$scope.board[0] = ["0","0","0"];
	$scope.board[1] = ["0","0","0"];
	$scope.board[2] = ["0","0","0"];
	
	var col;
	var row;
	var counter = 2;
	
	$scope.rowClick = function(index){
		row = index;
		console.log('row found');
	};
	
	$scope.colClick = function(index){
		col = index;
		console.log('col found');
	};
	
	$scope.xOrO = function(event){
		if (counter % 2 === 0){
			$scope.board[row][col] = 1;
			event.target.innerHTML = 'X';
		} else {
			$scope.board[row][col] = -1;
			event.target.innerHTML = 'O';
		}
		counter++;
	};
});

































