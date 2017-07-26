var expect = require( "chai" ).expect;

describe( "CTA component", function() {
    before( function() {
        browser.url( "/tests/cta" );
        return browser;
    } );

    it( "should look like baseline", function() {
        return browser
            .moveToObject( ".rh-cta-link", -10, -10 )
            .compareScreen( "cta", {
                name: "component",
                elem: ".rh-cta-link",
                screenWidth: [ 600 ]
            } );
    } );

    it( "should have secondary styles when style is set to secondary", function() {
        return browser
            .url( "/tests/cta/1" )
            .getAttribute( ".rh-cta-link", "data-rh-cta-type" ).then( function( type ) {
                expect( type ).to.equal( "secondary" );
            } )
            .getCssProperty( ".rh-cta-link", "background-color" ).then( function( background ) {
                expect( background.value ).to.equal( "transparent" );
            } );
    } );

} );
