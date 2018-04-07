var myApp = angular.module("ticketarena", ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "template/list.html"
    })
    .when("/full", {
        templateUrl : "template/full-list.html"
    })
});

  myApp.controller('listCtrl', ['$scope', '$filter', '$http', function($scope, $filter, $http) {
    
    $http.get('https://api.myjson.com/bins/1fmg07').
      then(function(response) {
          $scope.concerts = response.data;
          console.log($scope.concerts);
      });


      // $scope.concerts = [{"title":"Halsey","image":"https://ssli.ebayimg.com/images/g/oy4AAOSwsW9Y2tRg/s-l1600.jpg","desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","dateEvent":"Thu, Aug 30, 2018 - 7:00pm","location":"Rogers Centre, Toronto ON","price":300},{"title":"Ed Sheeran","image":"https://ssli.ebayimg.com/images/g/4l8AAOSw32lYyHi1/s-l1600.jpg","desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","dateEvent":"Sat, Aug 30, 2018 - 7:00pm","location":"Rogers Centre, Toronto ON","price":260},{"title":"5 Seconds of Summer","image":"https://ssli.ebayimg.com/images/g/Yo8AAOSwfVpYo4aY/s-l1600.jpg","desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","dateEvent":"Sat, Aug 30, 2018 - 7:00pm","location":"Rogers Centre, Toronto ON","price":320},{"title":"Pink","image":"https://ssli.ebayimg.com/images/g/F~EAAOSwNnRYh-WS/s-l1600.jpg","desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","dateEvent":"Thu, Sep 24, 2018 - 7:00pm","location":"Air Canada Centre, Toronto ON","price":310},{"title":"Camila Cabello","image":"https://ssli.ebayimg.com/images/g/gjgAAOSwi1ZZciJ2/s-l1600.jpg","desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","dateEvent":"Thu, Oct 14, 2018 - 7:00pm","location":"Air Canada Centre, Toronto ON","price":120},{"title":"Ozzy Osbourne","image":"https://ssli.ebayimg.com/images/g/mNkAAOSwvKtY~mFO/s-l1600.jpg","desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","dateEvent":"Sat, Sep 30, 2018 - 7:00pm","location":"Budweiser Stage, Toronto ON","price":250}];
      
      //--------------------------------------------------
      // working with data storege
    
      //save it with local storage
      if(localStorage.concerts){
        var Myconcert = localStorage.concerts;
      }else{
        var Myconcert = $scope.concerts;
      }
      window.localStorage.setItem('concerts', $scope.concerts);
      
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
  
  
  

