
  $( ".nuevas-compras" )
  .keyup(function() {
    var value = $( this ).val();
    $( ".new-compras" ).text( value );
  })
  .keyup();