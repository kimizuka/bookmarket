(() => {
  const script = document.createElement('script');

  [].slice.call(document.querySelectorAll('[role="button"] [aria-hidden="true"] > :first-child')).forEach((elm) => { elm.innerHTML = '予定あり' });

  if (window.html2canvas) {
    downloadScreenShot();
  } else {
    script.onload = () => {
      downloadScreenShot();
      document.body.removeChild(script);
    };

    script.src = 'https://html2canvas.hertzen.com/dist/html2canvas.min.js';
    document.body.appendChild(script);
  }

  function downloadScreenShot() {
    html2canvas(document.querySelector('[data-view-heading]')).then((canvas) => {
      downloadImage(canvas.toDataURL());
    });
  }
  
  function downloadImage(dataUrl) {
    const name = 'calendar.png';
    const a = document.createElement('a');

    a.href = dataUrl;
    a.download = name;
    a.click();
  }
})();
