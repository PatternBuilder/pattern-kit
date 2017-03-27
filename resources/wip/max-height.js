rh.webrh.height = {
    max: function( first, second ) {
        return first > second ? first : second;
    },
    margin: function( $el ) {
        return parseInt( $el.css( "marginBottom" ) );
    },
    get: function( $parent ) {
        var myself = this,
            width = {
                max: 0,
                el: undefined,
                parent: $parent.width()
            },
            height = {
                max: 0,
                el: undefined,
                parent: $parent.height()
            },
            $el, depth,
            $child,
            count, columns;
        $( "[data-rh-use-height]", $parent ).each( function( index, value ) {
            $el = $( value ),
            depth = $el.attr( "data-rh-use-height" );
            if ( depth === "this" ) {
                max.height = myself.max( max.height, $el.height() );
            } else if ( depth === "children" ) {
                count = 0;
                $el.children().each( function( idx, val ){
                    $child = $( val );
                    count+=1;
                    // Get max width
                    if (width.max < $child.width() ) {
                        width.max = $child.width();
                        width.el = $child;
                    }
                    // Get max height
                    if (height.max < $child.height() ) {
                        height.max = $child.height();
                        height.el = $child;
                    }
                } );
                console.log( "item count: " + count );
            }
        });
        columns = Math.floor( width.parent / width.max );
        console.log( "columns: " + columns );
        // if width of children * #of columns > width of parent, use height of stacked children?
        var max = height.max;
        if ( columns > count ) {
            max = height.max + parseInt(height.el.next().height());
        }
        return max;
    },
    set:    function ( $el, $parent ) {
        var height = this.get( $parent ) + this.margin( $el );
        $el.css( "max-height", height + "px");
    }
};

// data-rh-set-height : identifies the element to have it's max-height set
// data-rh-use-height="children" : indictates that max-height should be collected from it's children elements
// data-rh-use-height="this" : indicates that max-height should be collected from this element
/* $( "[data-rh-dynamic-height]", context ).each( function( index, value ) {
    rh.webrh.height.set( $( "[data-rh-set-height]", $( value ) ), $( value ) );
} ); */

$( window ).resize( function() {
    $( "[data-rh-dynamic-height]", context ).each( function( index, value ) {
        rh.webrh.height.set( $( "[data-rh-set-height]", $( value ) ), $( value ) );
    } );
} );
