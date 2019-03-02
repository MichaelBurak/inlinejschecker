//Simple check of page for any inline JS.
//If so, transform font to comic sans.

var scripts = document.getElementsByTagName("script");
for (s of scripts) {
  if (s.hasAttribute("src")) {
    $("*").each(function() {
      $(this).css("font-family", "Comic Sans MS");
    });
  }
}
