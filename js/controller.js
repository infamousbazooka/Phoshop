var mainController = angular.module('mainController', []);
mainController.controller("SearchController", function($scope, $http){
	$scope.items = [];
	$http.get('js/data.json').success(function(data){
		console.log("success!");
		$scope.items = data;
	});
});
mainController.controller("DetailsController", function($scope, $http, $routeParams){
	$scope.phones = [];
	$http.get('js/data.json').success(function(data){
		console.log("success!");
		$scope.items = data;
		$scope.whichItem = $routeParams.itemId;
	});
});