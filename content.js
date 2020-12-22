

function messageBackground() {
  window.onload = function() {
    if (window.location.href == 'https://www.youtube.com/') {
      history.pushState({}, '', './statehome');

    } else if (window.location.href.includes('/results')) {
      // chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
      //   console.log('changedstate');
      // });
      console.log('bts')
      history.replaceState({}, '', './stateresult');

    }

  }
  window.addEventListener('yt-navigate-start', function() {

    // chrome.runtime.connect().onDisconnect.addListener(function() {
    //   chrome.runtime.sendMessage({message: 'reconnect'});
    //   console.log('disconnected');
    //   // clean up when content script gets disconnected
    // })
    // if (window.readyState === "complete") {
      
    // }

    if (window.location.href == 'https://www.youtube.com/') { //don't inject
    history.pushState({}, '', './statehome')
    chrome.runtime.sendMessage({message: 'home'});
    var port = chrome.runtime.connect({name: "colin"});
    port.postMessage({joke: "hey wassup"});
    console.log('testing');
    
  } else if (window.location.href.includes('/results')) { //inject css
      //history.pushState({id: 'results'}, '', 'searchedVideos');       
      chrome.runtime.sendMessage({message: 'results'});
      console.log('working 2');

    } else if (window.location.href.includes('/watch')) {
      chrome.runtime.sendMessage({message: 'watch'});
    }
    
    // if (chrome.runtime.lastError) {
    //   setTimeout(messageBackground, 1000);
      
    // } else {

    // }
  
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








