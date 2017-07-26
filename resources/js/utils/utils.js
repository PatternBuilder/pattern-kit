//--- Global utility variables
rh.webrh.utils = {
    lg: function() {
        return $( window ).width() >= 1200;
    },
    md: function() {
        return $( window ).width() >= 992 && $( window ).width() < 1200;
    },
    sm: function() {
        return $( window ).width() >= 768 && $( window ).width() < 992;
    },
    xs: function() {
        return $( window ).width() >= 480 && $( window ).width() < 768;
    },
    xxs: function() {
        return $( window ).width() < 480;
    },
    getHeight: function() {
        return $( window ).height();
    },
    url: {
        root: window.location.hostname,
        path: window.location.pathname.split( "/" )
    }
};
