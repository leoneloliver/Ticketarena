
var app = angular.module("ticketarena", ['ngRoute']);

  app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "list.html"
    })
    .when("/full", {
        templateUrl : "full-list.html"
    })
  });

  app.controller('listCtrl', ['$scope', '$filter', '$http', function($scope, $filter, $http) {
    $http.get('https://api.myjson.com/bins/1fmg07').
      then(function(response) {
          $scope.concerts = response.data;
      });

      //--------------------------------------------------
      // working with data storege
    
      //save it with local storage
      if(localStorage.concerts){
        var Myconcert = localStorage.concerts;
        // var Myconcert = JSON.stringify(localStorage.concerts);
      }else{
        //convert JSON animal into a string
        var Myconcert = JSON.stringify($scope.concerts);
      }
      window.localStorage.setItem('concerts', Myconcert);
      
      $scope.Newconcerts = JSON.parse(window.localStorage.getItem('concerts'));
      // console.log($scope.Newconcerts);
      // console.log('first call');
      
      $scope.insertData = function (){
        // inserting new data
        var oldArray = JSON.parse(window.localStorage.getItem('concerts'));
        var newProduct = [{ title: "Halsey", image: "https://ssli.ebayimg.com/images/g/oy4AAOSwsW9Y2tRg/s-l1600.jpg", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dateEvent: "Thu, Aug 30, 2018 - 7:00pm", location: "Rogers Centre, Toronto ON", price: 300 }];
  
        console.log(oldArray.concat(newProduct));
        //convert JSON animal into a string
        var ConvertMyconcert = JSON.stringify(oldArray.concat(newProduct));
        //save it with local storage
        window.localStorage.setItem('concerts', ConvertMyconcert);
        
        $scope.Newconcerts = JSON.parse(window.localStorage.getItem('concerts'));
      }
      //----------------------------------------------------
      
      $scope.showAll = function () {
        var element = document.getElementById("showmore");
        element.parentNode.removeChild(element);
      };
  }]);


