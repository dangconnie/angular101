var clickApp = angular.module("clickApp", []);
clickApp.controller("clickController", ($scope)=>{
	// $scope.test = "Is this working?";
	// need to initialize variables
	$scope.students=[];
	$scope.tasks = [];

	$scope.handleClick = function(){
		// console.log("You clicked!");
		// there is a corresponding value in the html. must be in scope in js for html to know about it
		$scope.students.push($scope.studentName);
	}

	$scope.clearStudents = function(){
		$scope.students = [];
	}

	$scope.submitHandler = function(){
		$scope.tasks.push({
			name: $scope.task,
			date: $scope.taskDate
		});
		// sets field to empty every time form is submitted
		$scope.task = "";
		$scope.date = "";
		$scope.taskFilter = "";
	}
});