  function replyBack() {
    if (window.location.href.includes('/results')) {
      chrome.runtime.sendMessage({message: 'results'});
      
    } else if (window.location.href === 'https://www.youtube.com/') {
      chrome.runtime.sendMessage({message: 'home'});
      
    } else if ('/watch' === location.pathname) {
      chrome.runtime.sendMessage({message: 'watch'});
      
    } else if (window.location.href.includes('/user')) {
      chrome.runtime.sendMessage({message: 'user'});
      
    } else if (window.location.href.includes('channel')) {
      chrome.runtime.sendMessage({message: 'channel'});
    }
    
    return true
    
  }
  
  replyBack();







