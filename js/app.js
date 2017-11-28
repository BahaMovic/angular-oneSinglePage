var myApp = angular.module('myApp',['ngRoute','mainController']);

myApp.config(['$routeProvider',function($routeProvider)
	{
		$routeProvider.when('/item1',{templateUrl:"partail/item1.html",controller:'item1Controller'}).
		when('/item2',{templateUrl:"partail/item2.html",controller:'item2Controller'}).
		otherwise({
			redirectTo:"/item2"
		});
	}]);