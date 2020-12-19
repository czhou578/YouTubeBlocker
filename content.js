

function messageBackground() {
  window.addEventListener('yt-navigate-start', function() {

    // chrome.runtime.connect().onDisconnect.addListener(function() {
    //   chrome.runtime.sendMessage({message: 'reconnect'});
    //   console.log('disconnected');
    //   // clean up when content script gets disconnected
    // })
  
    if (chrome.runtime.lastError) {
      setTimeout(messageBackground, 1000);
    } else {
      if (window.location.href == 'https://www.youtube.com/') { //don't inject
        chrome.runtime.sendMessage({message: 'home'});
        
      } else if (window.location.href.includes('/results')) { //inject css
        
        chrome.runtime.sendMessage({message: 'results'});
        console.log('working 2');
      } else if (window.location.href.includes('/watch')) {
        chrome.runtime.sendMessage({message: 'watch'});
      }

    }
  
   })

}

var p;
if (window.performance.getEntriesByType("navigation")) {
  p = window.performance.getEntriesByType("navigation")[0].type;
  if (p == 'reload') {
    console.log('reloaded');
    messageBackground();

  }
}
messageBackground();





