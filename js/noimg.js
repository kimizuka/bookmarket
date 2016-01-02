(function(win, doc) {

  "use strict";

  ([].slice.call(document.querySelectorAll("img"))).forEach(function(elm) {elm.style.display = "none"});

})(this, document);