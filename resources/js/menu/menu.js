rh.webrh.menu = {
    // this boolean prevents a constant update to the sticky nav
    isFixed: false,
    // returns an element with context
    getEl: function( identifier, context ) {
        return $( identifier, context );
    },
    // Return dropdown menu to closed when fixing or unfixing the nav
    toggleDropdownState: function( $context ) {
        var $button = $context.find( "[data-rh-toggle-open]" );
        if ( $button.attr( "data-rh-state" ) === "open" && typeof rh.webrh.toggleElement !== "undefined" ) {
            rh.webrh.toggleElement( $button, $( "#" + $button.attr( "data-rh-toggle-id" ), $context ) );
        }
    },
    setFixed: function( $fixedNav, $staticNav ) {
        // Close static and fixed nav dropdowns when changing state
        this.toggleDropdownState( $staticNav );
        this.toggleDropdownState( $fixedNav );
        $fixedNav.slideDown();
        return true;
    },
    topState: function( $fixedNav, $staticNav ) {
        // Close static and fixed nav dropdowns when changing state
        this.toggleDropdownState( $staticNav );
        this.toggleDropdownState( $fixedNav );
        $fixedNav.slideUp();
        return false;
    }
};

// Sticky nav setup
// Add fixed nav to the screen
var $staticNav = rh.webrh.menu.getEl( "[data-rh-menu=initial]", context ),
    $fixedNav;

$staticNav.before( $staticNav.clone().attr( "data-rh-menu", "fixed" ) );
$fixedNav = rh.webrh.menu.getEl( "[data-rh-menu=fixed]", context );

// give new fixedNav a different toggleID
var $trigger = $fixedNav.find( "[data-rh-toggle-id]" ),
    newID = $trigger.data( "rh-toggle-id" ) + "Fixed";
// append Fixed to attribute and ID element
$fixedNav.find( "#" + $trigger.data( "rh-toggle-id" ) ).attr( "id", newID );
$trigger.attr( "data-rh-toggle-id", newID );

// Add onclick event for scroll-to-top icon
$( "[data-rh-scroll-to=top]", $fixedNav ).click( function( event ) {
    event.preventDefault();
    rh.webrh.scrollToTop( $fixedNav, rh.webrh.menu.topState( $fixedNav, $staticNav ) );
} );

// Set rules for fixed nav interactions
$( window ).scroll( function() {
    // If the top navigation is above the fold + 300px, show the sticky nav
    if ( $( this ).scrollTop() > ( $staticNav.height() + 300 ) ) {
        // Check if the sticky nav is already active, if not, trigger is and return true
        rh.webrh.menu.isFixed = !rh.webrh.menu.isFixed ?
            rh.webrh.menu.setFixed( $fixedNav, $staticNav ) : rh.webrh.menu.isFixed;
    } else {
        // Check if the sticky nav is has already been turned off, if it hasn't, trigger and return false
        rh.webrh.menu.isFixed = rh.webrh.menu.isFixed ?
            rh.webrh.menu.topState( $fixedNav, $staticNav ) : rh.webrh.menu.isFixed;
    }
} );
