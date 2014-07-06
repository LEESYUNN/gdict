// http://developer.chrome.com/extensions/samples.html
// The onClicked callback function.
function onClickHandler(info, tab) {
  var sText = info.selectionText;
  var encodedQuery = encodeURIComponent(sText + " meaning");
  var url = "https://www.google.com/search?q=" + encodedQuery;
  
  addHistory(sText);
  openPage(url);
};

function openPage(url) {
  window.open(url, '_blank');
}

chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
  var context = "selection";
  var title = "Gdict";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "id": "context" + context});  
});
