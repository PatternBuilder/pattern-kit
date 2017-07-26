describe( "Icon panel component", function() {
    before( function() {
        browser.url( "/tests/icon_panel" );
        return browser;
    } );

    it( "should look like baseline", function() {
        return browser
            .compareScreen( "icon_panel", {
                name: "component",
                elem: ".rh-icon-panel--component",
                screenWidth: [ 600 ]
            } );
    } );
} );
