var expect = require( "chai" ).expect;

describe( "Navigation link component", function() {
    before( function() {
        browser.url( "/tests/nav_links" );
        return browser;
    } );

    // TODO Fix issue with generating this baseline image
    // it( "should look like baseline", function() {
    //     return browser
    //         .compareScreen( "nav_links", {
    //             name: "component",
    //             elem: ".rh-navigation-link--component",
    //             screenWidth: [ 1200 ]
    //         } );
    // } );

    // it( "should be styled like utility links", function() {
    //     var el = ".rh-navigation-link--component > *:first-child .rh-navigation-link";
    //     return browser
    //         .url( "/tests/nav_links/1" )
    //         .getCssProperty( el, "color" ).then( function( color ) {
    //             return expect( color.value ).to.equal( "rgba(210,211,213,1)" );
    //         } )
    //         .getCssProperty( el, "text-transform" ).then( function( transform ) {
    //             return expect( transform.value ).to.equal( "uppercase" );
    //         } )
    //         .getCssProperty( el, "font-size" ).then( function( size ) {
    //             return expect( size.value ).to.equal( "11px" );
    //         } );
    // } );

    it( "should contain utility icons", function() {
        var el = ".rh-navigation-link--component > *:first-child .rh-navigation-link-icon";
        return browser
            .url( "/tests/nav_links/2" )
            .getTagName( el + " > *:first-child" ).then( function( tagName ) {
                return expect( tagName ).to.equal( "svg" );
            } );
    } );
} );
