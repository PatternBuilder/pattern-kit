rh.webrh.toggleElement = function( $trigger, $target ) {
    var state = $target.attr( "data-rh-state" ),
        $targetObj  = $target.attr( "data-rh-toggle-target" );
    var hiddenAt, doToggle = true;
    // If the target object exists and is not empty
    if ( typeof $targetObj !== "undefined" && $targetObj !== "" ) {
        hiddenAt = $targetObj.split( " " );
            doToggle = false;
        // If the first array value is not empty
        $.each( hiddenAt, function( idx, bp ) {
            // Check that the bp value is one of the supported breakpoints
            if ( $.inArray( bp, ["xxs", "xs", "sm", "md", "lg"] ) >= 0 ) {
                if ( rh.webrh.utils[ bp ]() ) {
                    doToggle = true;
                }
            }
        } );
    }

    if ( doToggle ) {
        if ( state === "closed" || state === "" || typeof state === "undefined" ) {
            $target.slideDown().attr( "data-rh-state", "open" );
            $trigger.attr( "data-rh-state", "open" );
        } else {
            $target.slideUp().attr( "data-rh-state", "closed" );
            $trigger.attr( "data-rh-state", "closed" );
        }
    }
};

rh.webrh.resetElements = function( $target ) {

    // Function to check breakpoint attributes on elements that need to be reset
    function checkBreakpoints( $elm, $target, attributes ) {
        var hiddenAt = $target.split( " " ),
            doReset = true;
        $.each( hiddenAt, function( idx, bp ) {
            // Check that the bp value is one of the supported breakpoints
            if( $.inArray( bp, ["xxs", "xs", "sm", "md", "lg"] ) >= 0 ) {
                // If any of the breakpoints return true, don't allow reset
                if( rh.webrh.utils[ bp ]() ) {
                    doReset = false;
                }
            }
        });
        if ( doReset ) {
            // If not an allowed breakpoint, remove attribute settings
            $elm.removeAttr( attributes );
        }
    }

    // For each target that was found
    $.each( $target, function( idx, elm ) {
        var $elm = $( elm ),
            $triggerObj = $elm.attr( "data-rh-toggle-visuals" ),
            $targetObj  = $elm.attr( "data-rh-toggle-target" );
        // If the target element
        if( $targetObj ){
            checkBreakpoints( $elm, $targetObj, "data-rh-state style");
        }
        // If the trigger element
        if( $triggerObj ){
            checkBreakpoints( $elm, $triggerObj, "data-rh-state");
        }
    });
};

$( "[data-rh-toggle-open=hover]", context ).hover( function() {
    var $this = $( this );
    rh.webrh.toggleElement( $this, $this.siblings( "[data-rh-toggle-target]" ) );
} );

$( "[data-rh-toggle-open=click]", context ).click( function() {
    var $this = $( this ),
        toggleID = $this.attr( "data-rh-toggle-id" );
    if ( typeof toggleID !== "undefined" ) {
        rh.webrh.toggleElement( $this, $( "#" + toggleID, context ) );
    } else {
        rh.webrh.toggleElement( $this, $this.siblings( "[data-rh-toggle-target]" ) );
    }
} );

// Create debounce function to only trigger calls one time after it finishes resizing,
// instead of hundreds of times while it is updated
var resizeTimer;
$(window).on("resize", function() {

  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {

    // Reset any element with 'data-rh-state' attribute. Those
    // elements have been triggered before resizing and need to be reset.
    rh.webrh.resetElements( $( "[data-rh-state]", context ) );

  }, 250);

});
