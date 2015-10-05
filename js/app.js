var MyApp = angular.module('MyApp', [
	'ngRoute',
	'mainController'
]);
MyApp.config(['$routeProvider',function($routeProvider) {
	$routeProvider
	.when('/search',{
		templateUrl: 'partials/search.html',
		controller: 'SearchController'
	})
	.when('/details/:itemId',{
		templateUrl: 'partials/details.html',
		controller: 'DetailsController'
	}).
	otherwise({
		redirectTo: '/search'
	});
}]);