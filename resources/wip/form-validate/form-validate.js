rh.webrh.validate = {
    isNumber: function( evt ) {
        var charCode = ( evt.which ) ? evt.which : event.keyCode;
        if ( charCode > 31 && ( charCode < 48 || charCode > 57 ) ) {
            return false;
        }
        return true;
    },
    inLimit: function( $el ) {
        var type, min, max;
        if ( ( type = $el.attr( "type" ) ) === "number" ) {
            min = $el.attr( "min" );
            max = $el.attr( "max" );
            if ( $el.value < min ) {
                $el.value = min;
            } else if ( $el.value > max ) {
                $el.value = max;
            }
        }
    }
};
// $( "input" ).keypress( rh.webrh.validate.isNumber( event ) );
// $( "input" ).change( rh.webrh.validate.inLimit( $( this ) ) );
