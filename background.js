
chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
  chrome.tabs.executeScript(null,{file:"content.js"});  
  chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {
  
    if (response.message === "results") {
      chrome.tabs.removeCSS(null, {file: "home.css"});
      chrome.tabs.removeCSS(null, {file: "videoRec.css"});
      chrome.tabs.insertCSS(null,{file:"results.css"});
      //console.log('received results!');
    }
  
    if (response.message === "watch") {
      //console.log('received watch!')
      chrome.tabs.insertCSS(null, {file: "videoRec.css"});
    }
    
    if (response.message === "home") {
      chrome.tabs.insertCSS(null, {file: "home.css", runAt:"document_end"});
      chrome.tabs.removeCSS(null,{file:"results.css"});
      chrome.tabs.removeCSS(null, {file: "videoRec.css"});
      //console.log('received home!')
  
    }

    if (response.message === "user") {
      //console.log('users');
      chrome.tabs.insertCSS(null, {file: "channelUser.css"});
    }
  
  })
});





// window.addEventListener('popstate', function (event) {
//   if (history.state && history.state.id === 1) {
//       location.reload();
//       console.log('switched pages')
//   }
// }, false);



