var editor_update = function(markup, json) {
    $("#display_holder").attr('srcdoc', markup);
    $("#json_holder pre").text(JSON.stringify(json,null,2));
    updateDirectLink();
    resizeIframe();
}

var resizeIframe = function() {
  $('iframe').load(function() {
      this.style.height =
      this.contentWindow.document.body.offsetHeight + 'px';
  });
}

var updateDirectLink = function() {
    var url = window.location.href.replace(/\?.*/,'');

    url += '?data='+LZString.compressToBase64(JSON.stringify(editor.getValue()));
    document.getElementById('direct_link').href = url;
};

if(window.location.href.match('[?&]data=([^&]+)')) {
    try {
        data.starting = JSON.parse(LZString.decompressFromBase64(window.location.href.match('[?&]data=([^&]+)')[1]));
    }
    catch(e) {
        console.log('invalid starting data');
    }
    resizeIframe();
}
if (data.starting.name) {
  JSONEditor.defaults.options.startval = data.starting;
};

  // Initialize the editor with a JSON schema
  var editor = new JSONEditor(document.getElementById('editor_holder'),{
    schema: data.schema,
    theme: 'bootstrap3',
    iconlib: 'fontawesome4',
    keep_oneof_values: false
  });


  JSONEditor.plugins.sceditor.emoticonsEnabled = false;
  JSONEditor.plugins.ace.theme = 'twilight';


  editor.on('change',function() {
    var json = editor.getValue();
    $.ajax({
      url: "/validate",
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(json,null,2)
    }).success(function(response) {
      $('.valid').html(response);
      $.ajax({
        url: "/render/page",
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(json,null,2)
      }).done(function(markup) {
        editor_update(markup, json);
      });

    });
  });
