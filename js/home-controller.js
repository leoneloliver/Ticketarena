var myApp = angular.module("ticketarena", ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "template/list.html"
    })
    .when("/full", {
        templateUrl : "template/full-list.html"
    })
    .when("/search", {
        templateUrl : "template/search.html"
    })
    .when("/new-product", {
        templateUrl : "template/new-product.html"
    })
});

myApp.controller('listCtrl', ['$scope', '$filter', '$http', function($scope, $filter, $http) {
  
  $http.get('https://api.myjson.com/bins/1fmg07').
    then(function(response) {
        $scope.concerts = response.data;
        console.log($scope.concerts);
    });

    $scope.concerts = loadObject();

    //--------------------------------------------------
    //save it with local storage
    var Myconcert;
    if(localStorage.concerts){
     Myconcert = localStorage.concerts;
    }else{
      Myconcert = JSON.stringify($scope.concerts);
    }
    window.localStorage.setItem('concerts', Myconcert);
    
    $scope.Newconcerts = JSON.parse(window.localStorage.getItem('concerts'));
    //----------------------------------------------------  
    
}]);
  
  
  

