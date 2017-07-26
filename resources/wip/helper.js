////
// Toggle data-rh-state state of element with matching data-rh-toggle-target
////

rh.webrh.toggle = function (e) {
    e.preventDefault();
    var $this = $(this),
        targetValue = $this.attr('data-rh-toggle'),
        $target = $('[data-rh-toggle-target=' + targetValue + ']'),
        newValue = $target.attr('data-rh-state') == 'active' ? 'inactive' : 'active';

    $target.attr('data-rh-state', newValue);
    $this.attr('data-rh-state', newValue);
}

$('[data-rh-toggle]', context).on('click', rh.webrh.toggle);


