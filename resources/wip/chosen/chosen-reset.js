rh.webrh.chosenReset = function (e) {
    e.preventDefault();

    var $this = $(this),
        target = $this.attr('data-rh-chosen-reset');

    $(target).find('option:selected').removeAttr("selected");
    $('[data-rh-chosen="multi"]').trigger('chosen:updated');
}

$('[data-rh-chosen-reset]', context).on('click', rh.webrh.chosenReset);




