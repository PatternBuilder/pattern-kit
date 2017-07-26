//var expect = require( "chai" ).expect;

describe( "Menu layout", function() {
    before( function() {
        browser.url( "/tests/menu" );
        return browser;
    } );
    it( "should look like baseline", function() {
        return browser
            .compareScreen( "menu", {
                name: "layout",
                elem: ".rh-menu",
                screenWidth: [ 1200 ]
            } );
            // .setViewportSize( {
            //     width: 320,
            //     height: 600
            // } )
            // .click( "[data-rh-menu=initial] .rh-menu-mobile-bar-top .rh-navigation-link-container" )
            // .timeoutsImplicitWait(1000)
            // .compareScreen( "menu_mobile", {
            //     name: "pattern",
            //     elem: "body",
            //     screenWidth: [ 320 ]
            // } );
    } );
} );
