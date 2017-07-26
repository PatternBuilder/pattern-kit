var expect = require( "chai" ).expect;

describe( "Quantity component", function() {
    before( function() {
        browser.url( "/tests/quantity" );
        return browser;
    } );

    it( "should look like baseline", function() {
        return browser
            .compareScreen( "quantity", {
                name: "component",
                elem: ".rh-quantity--component",
                screenWidth: [ 250 ]
            } );
    } );

    it( "should be disabled and not required", function() {
        return browser
            .url( "/tests/quantity/1" )
            .getAttribute( "#quantity", "disabled" ).then( function( state ) {
                expect( state ).to.equal( "true" );
            } )
            .getAttribute( "#quantity", "required" ).then( function( state ) {
                expect( state ).to.equal( null );
            } );
    } );

} );
