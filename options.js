'use strict';

let page = document.getElementById('form');

function createAlert(option) {
  let parent = document.createElement('div');
  parent.classList.add(option.class);
  parent.setAttribute('uk-alert', '');
  let closeBtn = document.createElement('a');
  closeBtn.classList.add('uk-alert-close');
  closeBtn.setAttribute('uk-close', '');
  parent.appendChild(closeBtn);
  let p = document.createElement('p');
  let textNode = document.createTextNode(option.text);
  p.appendChild(textNode);
  parent.appendChild(p);
  return parent;
}

function isValidWidth(width) {
  return Number.isInteger(width);
}

function buildAlertOption(newWidth) {
  let isSuccess = isValidWidth(newWidth);
  return {
    'class': isSuccess ? 'uk-alert-success' : 'uk-alert-danger',
    'text': isSuccess ? `Value is successfully updated to ${newWidth}px!` : "Value is non-numeric or invalid.",
  };
}

let button = document.getElementById('button');
let inputArea = document.getElementById('width');
button.addEventListener('click', function() {
  let newWidth = parseInt(inputArea.value);
  let option = buildAlertOption(newWidth);
  let alertArea = document.getElementById('alert');
  alertArea.innerHTML = '';
  if (isValidWidth(newWidth)) {
    chrome.storage.sync.set(
      { width: `${newWidth}` },
      function() {
        alertArea.appendChild(createAlert(option));
      }
    )
  } else {
    alertArea.appendChild(createAlert(option));
  };
});

chrome.storage.sync.get('width', function(data) {
  inputArea.value = data.width;
});
