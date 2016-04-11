
$(document).on('click', '.disabled', function(e) {

  e.stopImmediatePropagation();

  return false;

});

$(document).on('click', 'li', function() {

  $( this ).toggleClass( "active" );

});
