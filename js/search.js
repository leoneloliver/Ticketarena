$(document).ready(function() {
  setTimeout(function(){ 
    activateSearch();
  },4000); 
  
});

function activateSearch(){
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

$(document).ready(function() {
  setTimeout(function(){ 
    $("#btn-search").on('click', function(){
      activateSearch();
    });
  },5000); 
});


