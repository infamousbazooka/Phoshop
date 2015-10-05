var MainController = angular.module('MainController', []);
MainController.controller("SearchController", function($scope, $http){
	$scope.items = [];
	$http.get('js/data.json').success(function(data){
		console.log("success!");
		$scope.items = data;
	});
});
MainController.controller("DetailsController", function($scope, $http, $routeParams){
	$scope.phones = [];
	$http.get('js/data.json').success(function(data){
		console.log("success!");
		$scope.items = data;
		$scope.whichItem = $routeParams.itemId;
	});
});