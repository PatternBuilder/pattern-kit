var expect = require("chai").expect;

describe( "SKU table component", function() {
    before( function() {
        browser.url( "/tests/sku_table" );
        return browser;
    } );
    it( "should look like baseline", function() {
        return browser.compareScreen( "sku_table", {
            name: "component",
            elem: ".rh-store-table--component",
            screenWidth: [ 400 ]
        } );
    } );

    it( "should contain script tags", function() {
        return browser
        .url( "/tests/sku_table/1" )
        .getTagName( "#skuTemplate" ).then( function( tagName ) {
            return expect( tagName ).to.equal( "script" );
        } )
        .getTagName( "#subtotalTemplate", "disabled" ).then( function( tagName ) {
            return expect( tagName ).to.equal( "script" );
        } );
    } );
} );
