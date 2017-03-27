rh.webrh.themeToggle = function(target, selector) {
  var $target = $(target),
      currentTheme = $target.attr('data-rh-theme'),
      newTheme = $target.attr(selector);

  $target.attr('data-rh-theme', newTheme);
  $target.attr(selector, currentTheme);
};


$('[data-rh-theme-hover]').hover(function() {
  rh.webrh.themeToggle(this, 'data-rh-theme-hover');
});

$('[data-rh-theme-click]', context).on('click', function() {
  rh.webrh.themeToggle(this, 'data-rh-theme-click');
});


