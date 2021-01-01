
  
  function replyBack() {
    
    var port = chrome.runtime.connect({name: "connection"});
    port.onDisconnect.addListener(obj => {
      if (chrome.runtime.lastError) {
        setTimeout(replyBack, 1000)
      }
    })
      
    if (window.location.href.includes('/results')) {
      port.postMessage({msg: "results"})
      
    } else if (window.location.href === 'https://www.youtube.com/') {
      port.postMessage({msg: "home"})
      
    } else if ('/watch' === location.pathname) {
      port.postMessage({msg: "watch"})
      
    } else if (window.location.href.includes('/user')) {
      port.postMessage({msg: "user"})
      
    } else if (window.location.href.includes('channel')) {
      port.postMessage({msg: "channel"})
      
    } else if (window.location.href.includes('=youtu.be')) {
      port.postMessage({msg: "outsideIn"})
    } 

    // window.onunload(function() {
    //   port.postMessage({msg: "sendIT"});
    // })
    
    return true
    
  }

  
  replyBack();







