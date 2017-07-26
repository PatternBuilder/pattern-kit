// This has the same issue as the CTA component (hover effects + Selenium)
describe( "Social icon component", function() {
    before( function() {
        browser.url( "/tests/social_icon" );
        return browser;
    } );

    it( "should look like baseline", function() {
        return browser
            //.moveToObject( ".rh-social-icon--component", -10, -10 )
            .compareScreen( "social_icon", {
                name: "component",
                elem: ".rh-social-icon--component",
                screenWidth: [ 600 ]
            } );
    } );
} );
