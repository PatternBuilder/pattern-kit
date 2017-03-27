// var expect = require("chai").expect;
describe( "Form layout", function() {
    before( function() {
        browser.url( "/tests/form" );
        return browser;
    } );
    it( "should look like baseline", function() {
        return browser.compareScreen( "form", {
            name: "layout",
            elem: ".rh-form--layout",
            screenWidth: [ 1200 ]
        } );
    } );
} );
