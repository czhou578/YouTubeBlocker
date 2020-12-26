
chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
  chrome.tabs.executeScript(null,{file:"content.js"});  
  chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {
  
    if (response.message === "results") {
      chrome.tabs.removeCSS(null, {file: "home.css"});
      chrome.tabs.removeCSS(null, {file: "videoRec.css"});
      chrome.tabs.insertCSS(null,{file:"results.css"});
    }
  
    if (response.message === "watch") {
      chrome.tabs.removeCSS(null, {file: "videoRec.css"});
      chrome.tabs.insertCSS(null, {file: "videoRec.css"});
    }
    
    if (response.message === "home") {
      chrome.tabs.insertCSS(null, {file: "home.css", runAt:"document_end"});
      chrome.tabs.removeCSS(null,{file:"results.css"});
      chrome.tabs.removeCSS(null, {file: "videoRec.css"});  
    }

    if (response.message === "user") {
      chrome.tabs.insertCSS(null, {file: "channelUser.css"});
    }

    if (response.message === "channel") {
      chrome.tabs.removeCSS(null, {file: "videoRec.css"});
      chrome.tabs.insertCSS(null, {file: "channelUser.css"});
    }
  
  })
});



