(function() {

  "use strict";

  var recognition = new webkitSpeechRecognition();

  recognition.lang = "ja";

  recognition.addEventListener("result", function(evt) {
    var txt = evt.results[0][0].transcript;

    if (txt) {
      console.log(evt.results[0][0].transcript);
    }
  }, false);

  recognition.addEventListener("end", function() {
    recognition.start();
  });

  recognition.start();

  console.log(document.body);

})();