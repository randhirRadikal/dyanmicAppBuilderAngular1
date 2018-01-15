var app = angular.module("app", ["ngRoute","firebase"]);
app.constant('urls',{
	BASE_URL: window.location.origin +'/#!',
	BASE_API_URL : ''
});
app.config(function($routeProvider,urls,$httpProvider) {
	var config = {
		apiKey: "AIzaSyAxJhD5xcV7h3c0nWkhwivROKk_gb8ilwA",
		authDomain: "app-builder-india.firebaseapp.com",
		databaseURL: "https://app-builder-india.firebaseio.com",
		projectId: "app-builder-india",
		storageBucket: "app-builder-india.appspot.com",
		messagingSenderId: "708804023266"
	};
	firebase.initializeApp(config);
	/*$routeProvider
	.when("/login", {
	templateUrl : "./view/login.html",
	controller : "mainCtrl"
})
.otherwise({
templateUrl : "./view/login.html",
controller : "mainCtrl"
});*/
});

app.controller('mainCtrl',function($scope,$rootScope,$timeout) {
	console.log('ok -- mainCtrl');
	$scope.folderName = 'dynamic';
	$scope.homeMenu={
		"index":true,
		"list":false,
		"details":false
	};

	$scope.viewPage = {
		"menuPage":true,
		"facebook":false
	};

	//functions

	var getCategoryList = function(){
		$scope.categoryList = [
			{
				"id":1,
				"name":'Appetizers',
				"image":"5a3b67f3b6b5b.jpg"
			},
			{
				"id":2,
				"name":'Entrees',
				"image":"5a3b67f3b6c06.jpg"
			},
			{
				"id":3,
				"name":'Desserts',
				"image":"5a3b67f3b6cb1.jpg"
			},
			{
				"id":4,
				"name":'Wine List',
				"image":"5a3b67f3b6d5c.jpg"
			}
		];
	};
	getCategoryList();

	var getItemList = function(id,categoryName){
		$scope.categoryName = categoryName;
		$scope.itemList = [
			{
				"id":1,
				"name": categoryName+' 1',
				"image":"5a3b67f3b6b5b.jpg"
			},
			{
				"id":2,
				"name":categoryName +' 2',
				"image":"5a3b67f3b6c06.jpg"
			},
			{
				"id":3,
				"name":categoryName +' 3',
				"image":"5a3b67f3b6cb1.jpg"
			},
			{
				"id":4,
				"name":categoryName +' 4',
				"image":"5a3b67f3b6d5c.jpg"
			}
		];
	};

	$scope.getSubCategoryList = function(id,name){
		getItemList(id,name);
	};
	var addItemList = function(data){

	};

	$scope.openItemPage = function(id,categoryName){
		$scope.viewPage = {
			"menuPage":true,
			"facebook":false
		};
		$scope.homeMenu={
			"index":false,
			"list":false,
			"details":true
		};
		getItemList(id,categoryName);
	};

	$scope.openMenu = function(ad){
		console.log(this.viewPage);
		switch(ad){
			case "menu":
				$scope.viewPage = {
					"menuPage":true,
					"facebook":false
				};
				$scope.homeMenu={
					"index":false,
					"list":true,
					"details":false
				};
				getCategoryList();
				break;
			case "facebook":
				$scope.viewPage = {
					"menuPage":false,
					"facebook":true
				};
				break;
			case "backHome":
				$scope.viewPage = {
					"menuPage":true,
					"facebook":false
				};
				$scope.homeMenu={
					"index":true,
					"list":false,
					"details":false
				};
				break;
		}
	};
});
