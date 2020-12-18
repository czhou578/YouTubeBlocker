chrome.runtime.onInstalled.addListener(function() {
  // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // That fires when a page's URL contains a 'g' ...
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'youtube' },
          })
        ],
        // And shows the extension's page action.
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});



chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {
  if (response.message == "terminate") {
    chrome.tabs.removeCSS(null, {file: "home.css"});
    history.go();
    return;
  }

  if (response.message == "results") {
    chrome.tabs.removeCSS(null, {file: "videoRec.css"});
    chrome.tabs.insertCSS(null,{file:"results.css"});
    console.log(response.message);

  }

  if (response.message == 'home') {
    chrome.tabs.removeCSS(null,{file:"results.css"});
    console.log
  }

  if (response.message == 'watch') {
    chrome.tabs.insertCSS(null, {file: "videoRec.css"});
  }
})


