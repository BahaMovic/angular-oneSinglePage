var mainController = angular.module("mainController",[]);

mainController.controller('item1Controller',function($scope,$http)
{
	$http.get("https://newsapi.org/v2/top-headlines?sources=football-italia&apiKey=f84bcf872efc4197ad7e89c0c86f51bb").then(function(myData){
		$scope.data = myData.data.articles;
	});
	
	$scope.name = "Hello in item1 Page";
});

mainController.controller("item2Controller",function($scope,$http)
{
	$http.get("https://newsapi.org/v2/top-headlines?sources=argaam&apiKey=f84bcf872efc4197ad7e89c0c86f51bb").then(function(myData){
		$scope.data = myData.data.articles;
	});
	$scope.text = "Hello in item2 page";
});