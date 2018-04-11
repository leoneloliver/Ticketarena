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
      if(localStorage.concerts){
        var Myconcert = localStorage.concerts;
      }else{
        var Myconcert = JSON.stringify($scope.concerts);
      }
      window.localStorage.setItem('concerts', Myconcert);
      
      $scope.Newconcerts = JSON.parse(window.localStorage.getItem('concerts'));
      
      $scope.insertData = function (){
        // inserting new data
        var oldArray = JSON.parse(window.localStorage.getItem('concerts'));
        var newProduct = [{ title: "Halsey", image: "https://ssli.ebayimg.com/images/g/oy4AAOSwsW9Y2tRg/s-l1600.jpg", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dateEvent: "Thu, Aug 30, 2018 - 7:00pm", location: "Rogers Centre, Toronto ON", price: 300 }];
  
        var ConvertMyconcert = JSON.stringify(oldArray.concat(newProduct));
        window.localStorage.setItem('concerts', ConvertMyconcert);
        
        $scope.Newconcerts = JSON.parse(window.localStorage.getItem('concerts'));
      }

      
      //----------------------------------------------------  
      
  }]);
  
  
  

