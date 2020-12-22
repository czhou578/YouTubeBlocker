
chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {

  if (response.message == "results") {
    history.pushState({id: 1}, '', "/searched");
    chrome.tabs.removeCSS(null, {file: "home.css"});
    chrome.tabs.removeCSS(null, {file: "videoRec.css"});
    chrome.tabs.insertCSS(null,{file:"results.css"});
    console.log('received results!');
  }

  if (response.message == 'watch') {
    history.pushState({id: 2}, '', "/watched");
    console.log('received watch!')
    chrome.tabs.insertCSS(null, {file: "videoRec.css"});
  }
  
  if (response.message == 'home') {
    //history.pushState({id: 0}, '', "https://wwww.youtube.com/homepage");
    console.log('received home!')
    chrome.runtime.onConnect.addListener(function(port) {
      port.onMessage.addListener(function(msg) {
        if (msg.joke == "hey wassup") {
          console.log('wassup dude')
          //port.postMessage({quest: "who"})
        }
      })
    })
    chrome.tabs.removeCSS(null,{file:"results.css"});
  }


})

chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
  console.log('changedstate');
});


// window.addEventListener('popstate', function (event) {
//   if (history.state && history.state.id === 1) {
//       location.reload();
//       console.log('switched pages')
//   }
// }, false);



