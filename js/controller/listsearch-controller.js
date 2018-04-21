myApp.controller('listsearchCtrl', ['$scope', '$filter', '$http', function($scope, $filter, $http) {
  
 $scope.Newconcerts = JSON.parse(window.localStorage.getItem('concerts'));
 
 $scope.remove = function (index){
    if (window.confirm("Do you really want to delete?")) { 
      
      Newconcerts = JSON.parse(window.localStorage.getItem('concerts'));
      Newchart = JSON.parse(window.localStorage.getItem('chartItem'));
      Newconcerts.splice(index,1);
      Newchart.splice(index,1);
      window.localStorage.setItem('concerts', JSON.stringify(Newconcerts));
      window.localStorage.setItem('chartItem', JSON.stringify(Newchart));
      $scope.Newconcerts = JSON.parse(window.localStorage.getItem('concerts'));
      loadChartHOme();
      
    }
    
  }
      
}]);
  
// serach filter
myApp.filter('searchFor', function(){
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