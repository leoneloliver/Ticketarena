 myApp.controller('newproductCtrl', ['$scope', '$filter', '$http', function($scope, $filter, $http) {
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
  }]);
  