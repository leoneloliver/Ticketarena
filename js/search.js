$(document).ready(function() {
  setTimeout(function(){ 
    activateSearch();
  },4000); 
  
});

function activateSearch(){
  console.log('activate search');
  // search top bar behaviors
    $('[data-search]').on('change keyup input', function() {
      var searchVal = $(this).val();
      var filterItems = $('[data-filter-item]');
      if ( searchVal !== '' ) {
        filterItems.addClass('hide');
        $('[data-filter-item][data-filter-name*="' + searchVal.toLowerCase() + '"]').removeClass('hide');
        //$('.term').text("#"+searchVal.toLowerCase());
      } else {
        filterItems.addClass('hide');
        //$('.term').text('');
      }
    });
}


var myUrl = window.location.href;
//Splitting it with : as the separator
var myarr = myUrl.split("!");

//Then read the values from the array where 0 is the first
console.log('first page router: '+myarr[1]);

if((myarr[1]=='/search') || (myarr[1]=='/new-product')){
  hideChart();
}



