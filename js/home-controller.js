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
      
      // $scope.insertData = function (){
      //   // inserting new data
      //   var oldArray = JSON.parse(window.localStorage.getItem('concerts'));
      //   var newProduct = [{ title: "Halsey", image: "https://ssli.ebayimg.com/images/g/oy4AAOSwsW9Y2tRg/s-l1600.jpg", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dateEvent: "Thu, Aug 30, 2018 - 7:00pm", location: "Rogers Centre, Toronto ON", price: 300 }];
      //   var ConvertMyconcert = JSON.stringify(oldArray.concat(newProduct));
      //   window.localStorage.setItem('concerts', ConvertMyconcert);
      //   $scope.Newconcerts = JSON.parse(window.localStorage.getItem('concerts'));
      // }

      $scope.remove = function (index){
        
        Newconcerts = JSON.parse(window.localStorage.getItem('concerts'));
        Newchart = JSON.parse(window.localStorage.getItem('chartItem'));
        Newconcerts.splice(index,1);
        Newchart.splice(index,1);
        window.localStorage.setItem('concerts', JSON.stringify(Newconcerts));
        window.localStorage.setItem('chartItem', JSON.stringify(Newchart));
        $scope.Newconcerts = JSON.parse(window.localStorage.getItem('concerts'));
      }



      // form insert
      $scope.master = {};
      $scope.save= function(dataCostumer) {
        if(dataCostumer){
          $scope.master = angular.copy(dataCostumer);
        }


        if($scope.master.title && $scope.master.desc && $scope.master.dateEvent && $scope.master.location && $scope.master.image && $scope.master.price && $scope.master.qtd){
          //alert('sent');
          console.log($scope.master);
    
          document.getElementById('container').innerHTML= "<div class='msg'><span>Product has been created!</span></div>";
         
          // // updating chart results
          var newqtd = parseInt($scope.master.qtd);
          var newartist = $scope.master.title;
          var oldchart = JSON.parse(window.localStorage.getItem('chartItem'));
          var newchart = [{ label: newartist, value: newqtd }];  
          var ConvertMychart = JSON.stringify(oldchart.concat(newchart));
          window.localStorage.setItem('chartItem', ConvertMychart);
          loadChartHOme();


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


// serach
myApp.filter('searchFor', function(){

  // All filters must return a function. The first parameter
  // is the data that is to be filtered, and the second is an
  // argument that may be passed with a colon (searchFor:searchString)

  return function(arr, searchString){

    if(!searchString){
      return arr;
    }

    var result = [];

    searchString = searchString.toLowerCase();

    // Using the forEach helper method to loop through the array
    angular.forEach(arr, function(item){

      if(item.title.toLowerCase().indexOf(searchString) !== -1){
        result.push(item);
      }

    });

    return result;
  };

});

// The controller

  
  
  

