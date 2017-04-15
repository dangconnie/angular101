var app = angular.module('app',['ui.router']);

// if you want to redirect to an existing route when no route is found, add $urlRouterProvider 
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	// give name to state. in this case, it is 'firstMessage'
	// as a part of the stateProvider, you need to provide a new state by doing $stateProvider.state
	$stateProvider.state('firstMessage',{
		// provide options for state in between the {}
		// url is specifying the route for the state

		url:'/first-msg',
		// template:'<strong>This is the first message</strong>'
		templateUrl:'msg1.htm',
		controller: 'msg1'
	})
	$stateProvider.state('secondMessage',{
		url:'/second-msg',
		templateUrl:'msg2.htm',
		controller: 'msg2'
	})
	.state('root',{
		url:'/',
		template: '<strong>You are at the root route</strong>'
	});
	// what if user goes to an invalid route?
	//errorRoute is just a state name. you can name it anything
	// errorRoute state is not needed if you add in $urlRouterProvider above
		// .state('errorRoute',{
		// 	url: '*path',
		// 	template: 'route not found'
		// });
	// what you're saying: if no route is found, go to this route: ('/')
	$urlRouterProvider.otherwise('/');
}]);

// create controller
//use scope as part of the controller
app.controller('msg1',['$scope', function($scope){
	$scope.a = 10;
	$scope.b = 20;
}]);

app.controller('msg2',['$scope', function($scope){
	$scope.c = 100;
	$scope.d = 200;
}]);