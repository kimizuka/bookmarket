(function() {

  "use strict";

  var hostname = location.hostname,
      pathname = location.pathname,
      port     = location.port,
      hash     = location.hash,
      search   = location.search,
      url;

  if (/jsdo\.it$/.test(location.hostname)) {
    hostname = location.hostname.replace(/jsdo\.it$/, "jsrun.it");
    pathname = location.pathname.replace(/((?:\/[^\/]+){2}).*/, "$1");
    search   = "";
  }
   
  if (port) {
      pathname = pathname.replace(/\/$/, "") + ":" + port + "/";
  }
    
  url = _fixedEncodeURIComponent(location.protocol + "//" + hostname + pathname + hash + search);

  window.open("https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=" + url);

  function _fixedEncodeURIComponent(str) {
    return encodeURIComponent(str).replace(/[!'()]/g, escape).replace(/\*/g, "%2A");
  }
    
})();