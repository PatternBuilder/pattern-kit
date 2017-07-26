var expect = require( "chai" ).expect;

describe( "Store footer pattern", function() {
    before( function() {
        browser.url( "/tests/store_footer" );
        return browser;
    } );

    it( "should look like baseline", function() {
        return browser
            .compareScreen( "store_footer", {
                name: "pattern",
                elem: "body",
                screenWidth: [ 1200 ]
            } );
    } );

    it( "should allow aside to be optional", function() {
        return browser
            .url( "/tests/store_footer/1" )
            .isExisting( ".rh-footer-main" ).then( function( footerExists ) {
                expect( footerExists ).to.equal( true );
            } )
            .isExisting( ".rh-footer-aside" ).then( function( asideExists ) {
                expect( asideExists ).to.equal( false );
            } );
    } );

    it( "should allow aside's background to be customizable", function() {
        var asideColor = "white";
        return browser
            .url( "/tests/store_footer/2" )
            .getAttribute( ".rh-card--layout", "data-rh-theme" ).then( function( theme ) {
                expect( theme ).to.include( asideColor );
            } );
    } );
} );
