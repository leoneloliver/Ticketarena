$(document).ready(function() {
  setTimeout(function(){ 
    // search top bar behaviors
    $('[data-search]').on('change keyup input', function() {
      var searchVal = $(this).val();
      var filterItems = $('[data-filter-item]');
      if ( searchVal !== '' ) {
      	filterItems.addClass('hide');
      	$('[data-filter-item][data-filter-name*="' + searchVal.toLowerCase() + '"]').removeClass('hidden');
      	//$('.term').text("#"+searchVal.toLowerCase());
      } else {
      	filterItems.removeClass('hide');
      	//$('.term').text('');
      }
    });
  },3000); 
});