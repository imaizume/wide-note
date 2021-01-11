function setDisabledClass() {
  chrome.storage.sync.get(
    { 'width' : '', 'isEnabled': false },
    function(data) {
      let noteBodyClassName = 'p-article__body';
      let e = document.getElementsByClassName(`${noteBodyClassName}`)[0];
      if (e !== undefined)
        e.style.width = data.isEnabled ? (data.width + 'px') : '';
    }
  );
}

chrome.runtime.onMessage.addListener(
  function(request, sender, callback) {
    setDisabledClass();
  }
);

