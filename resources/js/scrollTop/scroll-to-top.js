rh.webrh.scrollToTop = function( $el, afterFunction ) {
    $( "html, body" ).animate( {
        scrollTop: $( "body" ).position().top + "px"
    }, 1200, "linear", afterFunction );
};
