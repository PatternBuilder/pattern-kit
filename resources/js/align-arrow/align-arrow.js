rh.webrh.alignArrow = function ($trigger, $target) {
    // Get the longest width of all the header children
    var offset,
        pos = Math.max.apply(Math, $trigger.children().map(function () {
                return $(this).width();
            }).get()) + 2,
        $arrow = $target.find( "[data-rh-toggle-pointer]" ), // Get the pointer element
        maxWidth = $target.css( "max-width" );
    if ( typeof maxWidth !== "undefined" && typeof $arrow !== "undefined" ) {
        offset = maxWidth.slice(0, -2) - $arrow.outerWidth() - 20; // what's the max length
        if (pos < offset) { // if the position of the arrow is before the offset max
            $arrow.show().css({"left": pos + "px"});
        } else { // otherwise don't show the arrow
            $arrow.hide();
        }
    }
};

// Timeout is necessary for fonts to load before setting arrow alignment
setTimeout(function (context) {
    $("[data-rh-tooltip-type]", context).each(function (idx, val) {
        var $val = $(val),
            $target = $val.siblings( "[data-rh-toggle-target]" );
        if( typeof $target !== "undefined" ) {
            rh.webrh.alignArrow($val, $target);
        }
    });
}, 3000);
