// we pass the name of our ng app and an empty array. you can bring in a 3rd party module with the empty array
var myApp = angular.module("myApp", []);

// name of ng controller in html file
// whatever controller is in charge of will run in the code
// $scope ties everything together from html to js
myApp.controller("myController", ($scope, $http)=>{
	// things are only available to the view if it's attavhed to the scope. As a result, you can set the movieURL to a variable.
	// we need to pass the imagePath to the DOM

	var movieURL = 'https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query=superman';

	$scope.movieURL = 'https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query=superman';

	var imagePath = 'http://image.tmdb.org/t/p/w300/';

	$scope.imagePath = 'http://image.tmdb.org/t/p/w300/';
	// use http services to get whatever JSON finds here. when it returns, run this anon function to update movieData
	$http({
		method: 'GET',
		url: movieURL
	}).then(
		function successFunction(movieData){
			// with scope in front of it, view knows about it and will display it. without scope in front of it (movieData = movieData), view will not update b/c it doesn't know about it
			$scope.movieData = movieData;
			console.log(movieData);
		},
		function failedFunction(movieData){
			console.log(movieData);
		}
	)
	$scope.test = "Is this working?";
});
