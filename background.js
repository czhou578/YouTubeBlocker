
chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
  chrome.tabs.executeScript(null,{file:"content.js"});  

  chrome.runtime.onConnect.addListener(function(port) {
    console.assert(port.name == "connection");
    port.onMessage.addListener(function(msg) {
      if (msg.msg === "results") {
        chrome.tabs.removeCSS(null, {file: "home.css", runAt:"document_end"});
        chrome.tabs.removeCSS(null, {file: "videoRec.css", runAt:"document_end"});
        chrome.tabs.insertCSS(null,{file:"results.css", runAt:"document_end"});

      }

      if (msg.msg === "watch") {
        chrome.tabs.removeCSS(null, {file: "videoRec.css", runAt:"document_end"});
        chrome.tabs.insertCSS(null, {file: "videoRec.css", runAt:"document_end"});

      }

      if (msg.msg === "home") {
        chrome.tabs.insertCSS(null, {file: "home.css", runAt:"document_end"});
        chrome.tabs.removeCSS(null,{file:"results.css", runAt:"document_end"});
        chrome.tabs.removeCSS(null, {file: "videoRec.css", runAt:"document_end"});  

      }

      if (msg.msg === "user") {
        chrome.tabs.insertCSS(null, {file: "channelUser.css", runAt:"document_end"});
      }

      if (msg.msg === "channel") {
        chrome.tabs.removeCSS(null, {file: "videoRec.css", runAt:"document_end"});
        chrome.tabs.insertCSS(null, {file: "channelUser.css", runAt:"document_end"});

      }

    });
  })
});

chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {
  if (response.message === "outsideIn") {
    chrome.tabs.insertCSS(null, {file: "videoRec.css", runAt:"document_end"});
  }

});



