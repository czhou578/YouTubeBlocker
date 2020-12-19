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
  // if (history.go(-1)) {
  //   console.log('went back');
  // }

  if (response.message == "results") {
    console.log('received results!');
    history.replaceState({userId: 1}, '', "/searched");
    chrome.tabs.removeCSS(null, {file: "videoRec.css"});
    chrome.tabs.insertCSS(null,{file:"results.css"});
  }

  if (response.message == 'home') {
    console.log('received home!')
    chrome.tabs.removeCSS(null,{file:"results.css"});
  }

  if (response.message == 'watch') {
    console.log('received watch!')
    chrome.tabs.insertCSS(null, {file: "videoRec.css"});
  }
})


