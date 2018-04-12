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

      $scope.remove = function (index){
        
        Newconcerts = JSON.parse(window.localStorage.getItem('concerts'));
        Newconcerts.splice(index,1);
        window.localStorage.setItem('concerts', JSON.stringify(Newconcerts));
        $scope.Newconcerts = JSON.parse(window.localStorage.getItem('concerts'));
      }



      // form

      $scope.master = {};
      $scope.save= function(dataCostumer) {
        if(dataCostumer){
          $scope.master = angular.copy(dataCostumer);
        }


        if($scope.master.title && $scope.master.desc && $scope.master.dateEvent && $scope.master.location && $scope.master.image && $scope.master.price){
          //alert('sent');
          console.log($scope.master);
    
          document.getElementById('container').innerHTML= "<div class='msg'><span>Product has been created!</span></div>";
         
          // inserting new data
          var oldArray = JSON.parse(window.localStorage.getItem('concerts'));
          var newProduct = $scope.master;
          
          var ConvertMyconcert = JSON.stringify(oldArray.concat(newProduct));
          window.localStorage.setItem('concerts', ConvertMyconcert);
          
          $scope.Newconcerts = JSON.parse(window.localStorage.getItem('concerts'));
          //document.getElementById('container').innerHTML= "<div class='header'><img src='https://marsdd.com/wp-content/uploads/2015/02/tangerine-logo.png' /></div><span>Thank you! "+$scope.master.firstName+" "+$scope.master.lastName+" <br><br>The information has been sent successfully.<br><br><br><br>  </span>";
        }
      };
 
      // form

      //----------------------------------------------------  
      
  }]);
  
  
  

