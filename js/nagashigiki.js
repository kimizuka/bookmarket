(function(win, doc) {

  "use strict";

  var date     = new Date(),
      script   = doc.createElement("script"),
      URL      = "http://newscloud.id774.net/newscloud/blogs/jsonp?date=";

  win.callback = callback;

  script.src = URL + date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2) + ("0" + date.getDate()).slice(-2);
  doc.body.appendChild(script);

  function callback(arr) {
    var msg;

    doc.body.removeChild(script);
    delete win.callback;

    for (var i = 0, length = arr.length; i < length; i++) {
      msg = new SpeechSynthesisUtterance(arr[i][1].title);
      msg.lang = "ja-JP";
      speechSynthesis.speak(msg);
    }
  }

})(this, document);