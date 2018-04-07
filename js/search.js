$(document).ready(function() {
  setTimeout(function(){ 
    activateSearch();
  },3000); 
  $("#btn-search").on('click', function(){
    alert();
    activateSearch();
  });
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


