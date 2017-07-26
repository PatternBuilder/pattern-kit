//var expect = require("chai").expect;

describe( "Footer Layout", function() {
    before( function() {
        browser.url( "/tests/footer" );
        return browser;
    } );

    it( "should look like baseline", function() {
        return browser
            .compareScreen( "footer", {
                name: "layout",
                elem: ".rh-footer",
                screenWidth: [ 1200 ]
            } );
    } );
} );
