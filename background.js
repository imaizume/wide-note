
chrome.browserAction.onClicked.addListener(
  function(tab){
    chrome.storage.sync.get('isEnabled', function(data) {
      let newState = !data.isEnabled
      chrome.storage.sync.set(
        { isEnabled: newState },
        function() {
          let iconPath = newState ? "images/icon128.png" : "images/inactive.png";
          chrome.browserAction.setIcon({ path: iconPath });
          chrome.tabs.sendMessage(tab.id, {});
        }
      );
    });
  }
);

chrome.tabs.onUpdated.addListener(
  function(tabId, changeInfo, tab) {
    chrome.tabs.sendMessage(tabId, {});
  }
);

