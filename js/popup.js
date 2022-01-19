var App = App || {};

App.Popup = (() => {
  function init() {
    setVersion();
    addEventHandlers();
    validateWebsite();
  }

  function setVersion() {
    const version = chrome.app.getDetails().version_name;
    const div_version = document.getElementById('version');
    div_version.innerHTML = 'Extension <br> v' + version;
  }

  function addEventHandlers() {
    const logoEl = document.getElementById('logo-item');
    logoEl.addEventListener('click', function () {
      window.open('https://codigofacilito.com/', '_blanck');
    });

    const linkEl = document.getElementById('goto-courses');
    linkEl.addEventListener('click', function () {
      window.open('https://codigofacilito.com/courses', '_blanck');
    });
  }

  function validateWebsite() {
    const errorDiv = document.getElementById('error-div');
    const wbEL = document.getElementById('current-website');

    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      let url = tabs[0].url;
      if (url == 'https://codigofacilito.com/courses') {
        errorDiv.className = 'd-none';
      } else {
        errorDiv.className = '';
      }
      wbEL.innerHTML = url;
    });
  }
  init();
})();
