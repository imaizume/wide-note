// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let page = document.getElementById('form');

// const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
// function constructOptions(kButtonColors) {
//   for (let item of kButtonColors) {
//     button.style.backgroundColor = item;
//     page.appendChild(button);
//   }
// }
// constructOptions(kButtonColors);
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

