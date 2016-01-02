(function(win, doc) {

  "use strict";

  var date     = new Date(),
      ttl      = doc.querySelector("title"),
      script   = doc.createElement("script"),
      txt      = "",
      timer    = null,
      interval = 500,
      URL      = "http://newscloud.id774.net/newscloud/blogs/jsonp?date=";

  win.callback = callback;

  script.src = URL + date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2) + ("0" + date.getDate()).slice(-2);
  doc.body.appendChild(script);

  function callback(arr) {
    doc.body.removeChild(script);
    delete win.callback;

    for (var i = 0, length = arr.length; i < length; i++) {
      txt += (arr[i][1].title + ".......");
    }

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