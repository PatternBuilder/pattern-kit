describe( "menu_list component", function() {
    before( function() {
        browser.url( "/tests/menu_list" );
        return browser;
    } );

    it( "should look like baseline", function() {
        return browser
            .compareScreen( "menu_list", {
                name: "component",
                elem: ".rh-menu-list--component",
                screenWidth: [ 600 ]
            } );
    } );

    it( "should have different accordion on smaller resolutions", function() {
        browser.setViewportSize( {
                width: 320,
                height: 600
            } )
            .click( " .rh-menu-list-header" )
            .waitUntil( function() {
                return browser.getAttribute( ".rh-menu-list-links", "data-rh-state" ).then( function( state ) {
                    return state === "open";
                } );
            }, 3000 );
    } );

} );
