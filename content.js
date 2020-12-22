

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
        var port = chrome.runtime.connect({name: "colin"});
        port.postMessage({joke: "hey wassup"});
        //chrome.runtime.sendMessage({message: 'home'});
        
      } else if (window.location.href.includes('/results')) { //inject css
        history.pushState({id: 'results'}, '', 'searchedVideos');       
        chrome.runtime.sendMessage({message: 'results'});
        console.log('working 2');

      } else if (window.location.href.includes('/watch')) {
        chrome.runtime.sendMessage({message: 'watch'});
      }

    }
  
   })

}


var p;
var perfEntries = performance.getEntriesByType("navigation");
//console.log(perfEntries);
// if (perfEntries[0].type == "reload" && window.location.href.includes('/results')) {
//   chrome.runtime.sendMessage({message: 'results refreshed'});

//   //console.log('wwrong');
// }


// if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {

// }

messageBackground();

// {
//   "matches": ["*://www.youtube.com/results*"],
//   "css": ["results.css"],
//   "js": ["content.js"],
//   "run_at": "document_idle"

// },

// {
//   "css": ["videoRec.css"],
//   "matches": ["https://www.youtube.com/watch*"],
//   "run_at": "document_idle"
// }






