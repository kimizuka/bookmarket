(function(win, doc) {

  "use strict";

  var ttl      = doc.querySelector("title"),
      txt      = "",
      timer    = null,
      interval = 500;

  win.addEventListener("mouseup", _handleMouseup, true);

  function _handleMouseup() {
    txt = win.getSelection().toString();
    setTimeout(_delivery, 500);
  }
  
  function _delivery() {
    _update();

    txt = txt.substr(1);
    
    clearTimeout(timer);

    timer = setTimeout(function() {
      if (txt.length) {
        _delivery();
      } else {
        _update();
      }
    }, interval);
  }
  
  function _update() {
    ttl.innerText = txt;
  }

})(this, document);