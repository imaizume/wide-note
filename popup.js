'use strict';

let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('width', function(data) {
  changeWidth.setAttribute('value', data.width);
  changeWidth.textContent = "width : default";
});

let noteBodyClassName = 'p-article__body';
var isEnabled = false;
changeWidth.onclick = function(element) {
  let dflt = "uk-button-default";
  let primary = "uk-button-primary";
  let frm = isEnabled ? primary : dflt;
  let to = isEnabled ? dflt : primary;
  changeWidth.classList.replace(frm, to);

  isEnabled = !isEnabled;
  let width = isEnabled ? Math.max(element.target.value, 0) + 'px' : '';
  changeWidth.textContent = 'width: ' + (isEnabled ? width : "default");
  let code = `
        e = document.getElementsByClassName("${noteBodyClassName}")[0];\
        e.style.width = "${width}";\
  `;
  chrome.tabs.query(
    {active: true, currentWindow: true},
    function(tabs) {
      chrome.tabs.executeScript(tabs[0].id, { code: code });
    }
  );
};
