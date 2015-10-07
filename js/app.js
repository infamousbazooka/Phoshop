var myApp = angular.module('myApp',[
	'ngRoute',
	'MainController'
]);
myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/home',{
		templateUrl: 'partials/home/',
		controller: 'HomeController'
	});
	.otherwise({
		redirectTo: '/home'
	});
}]);