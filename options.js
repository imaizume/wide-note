'use strict';

let page = document.getElementById('form');

function createAlert(isSuccess) {
  let cls = isSuccess ? 'uk-alert-success' : 'uk-alert-danger';
  let parent = document.createElement('div');
  parent.classList.add(cls);
  parent.setAttribute('uk-alert', '');
  let closeBtn = document.createElement('a');
  closeBtn.classList.add('uk-alert-close');
  closeBtn.setAttribute('uk-close', '');
  parent.appendChild(closeBtn);
  let p = document.createElement('p');
  let text = isSuccess
    ? "Value is successfully updated!"
    : "Value is non-numeric or invalid.";
  let textNode = document.createTextNode(text);
  p.appendChild(textNode);
  parent.appendChild(p);
  return parent
}

let button = document.getElementById('button');
let alrt = document.getElementById('alert');
button.addEventListener('click', function() {
  var w = parseInt(document.getElementById('width').value);
  chrome.storage.sync.set({width: w}, function() {
    alrt.innerHTML = '';
    alrt.appendChild(createAlert(Number.isInteger(w)));
  })
});

