'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({width: 1080}, function() {
    console.log('Set width to 1080px.');
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'note.com'},
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
