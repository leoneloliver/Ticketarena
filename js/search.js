$(document).ready(function() {
  setTimeout(function(){ 
    activateSearch();
    document.getElementById("btn-search").addEventListener("click", activateSearch());
  },3000); 
});



function activateSearch(){
  // search top bar behaviors
    $('[data-search]').on('change keyup input', function() {
      var searchVal = $(this).val();
      var filterItems = $('[data-filter-item]');
      if ( searchVal !== '' ) {
        filterItems.addClass('hide');
        $('[data-filter-item][data-filter-name*="' + searchVal + '"]').removeClass('hide');
        //$('.term').text("#"+searchVal.toLowerCase());
      } else {
        filterItems.removeClass('hide');
        //$('.term').text('');
      }
    });
}