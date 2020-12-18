
window.addEventListener('yt-navigate-start', function() {
 
  if (window.location.href == 'https://www.youtube.com/') { //don't inject
    chrome.runtime.sendMessage({message: 'home'});

    
  } else if (window.location.href.includes('/results')) { //inject css
    
    chrome.runtime.sendMessage({message: 'results'});
    console.log('working 2');
  } else if (window.location.href.includes('/watch')) {
    chrome.runtime.sendMessage({message: 'watch'});
  }
 })




