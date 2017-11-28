var mainController = angular.module("mainController",[]);

mainController.controller('item1Controller',function($scope)
{
	$scope.name = "Hello in item1 Page";
});

mainController.controller("item2Controller",function($scope)
{
	$scope.text = "Hello in item2 page";
});