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

  chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
    if (response.message == "results") {
      history.pushState({id: 1}, '', "/searched");
      chrome.tabs.removeCSS(null, {file: "home.css"});
      chrome.tabs.removeCSS(null, {file: "videoRec.css"});
      chrome.tabs.insertCSS(null,{file:"results.css"});
      console.log('received results!');
    }

    if (response.message == 'watch') {
      console.log('received watch!')
      chrome.tabs.insertCSS(null, {file: "videoRec.css"});
    }
    
    if (response.message == 'home') {
      console.log('received home!')
      chrome.tabs.removeCSS(null,{file:"results.css"});
    }
  });

  // if (response.message == "results refreshed") {
  //   console.log('new results received');
  //   chrome.tabs.insertCSS(null,{file:"results.css"});
  // }



})



// window.addEventListener('popstate', function (event) {
//   if (history.state && history.state.id === 1) {
//       location.reload();
//       console.log('switched pages')
//   }
// }, false);



