// var expect = require("chai").expect;
describe( "Fieldset layout", function() {
    before( function() {
        browser.url( "/tests/fieldset" );
        return browser;
    } );
    it( "should look like baseline", function() {
        return browser.compareScreen( "fieldset", {
            name: "layout",
            elem: ".rh-fieldset--layout",
            screenWidth: [ 600 ]
        } );
    } );
} );
