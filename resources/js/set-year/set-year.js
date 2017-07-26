rh.webrh.setYear = function ( $el, when ) {
    if ( when === "now" ) {
        $el.text( new Date().getFullYear() );
    }
};

$( "[data-rh-year]" ).each(function( index, value ) {
    rh.webrh.setYear( $( value ), $( value ).attr( "data-rh-year" ) );
});
