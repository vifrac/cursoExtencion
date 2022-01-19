var App = App || {};

App.Preferences = (() => {
  function init() {
    setInputSelectedTime();
    addInputEventListener();
  }

  function setInputSelectedTime() {
    const timeSelectorEL = document.getElementById('time-selector');
    chrome.storage.sync.get('timeSelected', function (val) {
      if (val != undefined && val != null) {
        var timeSelectedByUser = val.timeSelected;
        timeSelectorEL.value = timeSelectedByUser;
      }
    });
  }

  function addInputEventListener() {
    const timeSelectorEL = document.getElementById('time-selector');
    timeSelectorEL.addEventListener('change', (e) => {
      saveOptions(e);
    });
  }

  function saveOptions(e) {
    const timeSelected = e.target.value;
    chrome.storage.sync.set({ timeSelected: timeSelected });
  }

  init();
})();
