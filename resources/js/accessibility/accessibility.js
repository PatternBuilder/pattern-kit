// Add focus to main content: https://www.bignerdranch.com/blog/web-accessibility-skip-navigation-links/
rh.webrh.skipNav = function( skipTo ) {
    $( skipTo ).attr( "tabindex", -1 ).on( "blur focusout", function() {
        $( this ).removeAttr( "tabindex" );
    } ).focus();
};

$( "[data-rh-skip-nav]" ).click( function() {
    rh.webrh.skipNav( $( this ).attr( "href" ) );
} );
