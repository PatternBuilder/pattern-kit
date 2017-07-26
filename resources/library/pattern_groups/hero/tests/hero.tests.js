var expect = require( "chai" ).expect;

describe( "Hero pattern", function() {
    before( function() {
        browser.url( "/tests/hero" );
        return browser;
    } );

    it( "should look like baseline", function() {
        return browser
            .compareScreen( "hero", {
                name: "pattern",
                elem: "body",
                screenWidth: [ 800 ]
            } );
            // .setViewportSize( {
            //     width: 320,
            //     height: 600
            // } )
            // .compareScreen( "hero_mobile", {
            //     name: "pattern",
            //     elem: "body",
            //     screenWidth: [ 320 ]
            // } );
    } );

    //it( "should have light theme and full height content", function() {
    it( "should have full height content", function() {
        return browser
            .url( "/tests/hero/1" )
            // .getCssProperty( "[data-rh-menu=fixed] .rh-menu-desktop [data-rh-nav-type='menu'] > li:first-child .rh-navigation-link", "color" ).then( function( color ) {
            //     expect( color.value ).to.equal( "rgba(37,37,39,1)" );
            // } )
            .getCssProperty( "[data-rh-group-size=full] .rh-band-group-body", "flex-grow" ).then( function( grow ) {
                expect( grow.value ).to.equal( 1 );
            } );

    } );

} );
