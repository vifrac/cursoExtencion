chrome.runtime.onInstalled.addListener(() => {
  let value = '1235hola';
  chrome.storage.sync.set({ timeSelected: 2 }, () => {
    console.log('Tiempo seleccionado por defecto');
  });

  chrome.storage.sync.set({ key: value }, function () {
    console.log('Value is set to ' + value);
  });

  chrome.storage.sync.get(['key'], function (result) {
    console.log('Value currently is ' + result.key);
  });

  chrome.storage.local.set({ key: value }, function () {
    console.log('Value is set to ' + value);
  });

  chrome.storage.local.get(['key'], function (result) {
    console.log('Value currently is ' + result.key);
  });
});
