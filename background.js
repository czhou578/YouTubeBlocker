
chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
  chrome.tabs.executeScript(null,{file:"content.js"});

  // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  //   chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"});
  // });
  
  chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {
  
    if (response.message === "results") {
      //history.pushState({id: 1}, '', "/searched");
      chrome.tabs.removeCSS(null, {file: "home.css"});
      chrome.tabs.removeCSS(null, {file: "videoRec.css"});
      chrome.tabs.insertCSS(null,{file:"results.css"});
      console.log('received results!');
    }
  
    if (response.message === "watch") {
      //history.pushState({id: 2}, '', "/watched");
      console.log('received watch!')
      chrome.tabs.insertCSS(null, {file: "videoRec.css"});
    }
    
    if (response.message === "home") {
      //history.pushState({id: 0}, '', "https://wwww.youtube.com/homepage");
      chrome.tabs.insertCSS(null, {file: "home.css", runAt:"document_end"});
      chrome.tabs.removeCSS(null,{file:"results.css"});
      chrome.tabs.removeCSS(null, {file: "videoRec.css"});
      console.log('received home!')
  
    }
  
  })
});





// window.addEventListener('popstate', function (event) {
//   if (history.state && history.state.id === 1) {
//       location.reload();
//       console.log('switched pages')
//   }
// }, false);



