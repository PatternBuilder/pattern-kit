rh.webrh.hash = function(location) {
  var newHash = location.hash.replace( /^#/, "" ),
      hashSplit = newHash.split("."),
      hashFunction = hashSplit[0];

      if (hashFunction === "tab") {
        rh.webrh.switchTab(hashSplit[1], hashSplit[2]);
      }
};


rh.webrh.switchTab = function(id, index) {

  $("[data-rh-tab-id='"  + id +  "']").each(function(i,v) {
    var $children = $(v).children();
    $children.attr("data-rh-active", "false");
    $children.eq(index).attr("data-rh-active", "true");
  });

};

if(window.location.hash) {
  rh.webrh.hash(window.location);
}

$(window).bind("hashchange", function() {
  rh.webrh.hash(location);
});
