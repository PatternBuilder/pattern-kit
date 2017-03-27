var expect = require( "chai" ).expect;

describe( "Form header component", function() {
    before( function() {
        browser.url( "/tests/form_header" );
        return browser;
    } );

    it( "should look like baseline", function() {
        return browser
            .compareScreen( "form_header", {
                name: "component",
                elem: ".rh-form-header--component",
                screenWidth: [ 600 ]
            } );
    } );

    it( "should have title styles and no tooltip", function() {
        return browser
            .url( "/tests/form_header/1" )
            .isExisting( ".rh-form-header-title" ).then( function( state ) {
                expect( state ).to.equal( true );
            } )
            .isExisting( ".rh-form-header-tooltip" ).then( function( state ) {
                expect( state ).to.equal( false );
            } );
    } );
} );
