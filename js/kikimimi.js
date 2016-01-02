(function(win, doc) {

  "use strict";

  win.addEventListener("mouseup", _handleMouseup, true);

  function _handleMouseup() {
    var txt = win.getSelection().toString(),
      txtList, msg;
    
    if (txt) {
      txtList = txt.split(/、|。/);

      setTimeout(function() {
        for (var i = 0, length = txtList.length; i < length; i++) {
          msg = new SpeechSynthesisUtterance(txtList[i]);
          msg.lang = "ja-JP";
          speechSynthesis.speak(msg);
        }
      }, 500);
    }
  }

})(this, document);