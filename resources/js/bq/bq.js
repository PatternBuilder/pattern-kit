rh.webrh.bq = function(target) {
  var width = $(window).width();

      $(target).each(function() {
        var $this = $(this),
            backgrounds = $this.attr('data-rh-bq').split(',');
            
        if (width > 768) {
          background = backgrounds[0];
        }
        else if (backgrounds.length === 2) {
          background = backgrounds[1];
        }
        else {
          return false;
        }
        $this.css('background-image', 'url(' + background + ')');
      });
};

rh.webrh.bq('[data-rh-bq]');
