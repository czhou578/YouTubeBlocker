
console.log('sun rui')
// function messageBackground() {
//   if (window.location.href == 'https://www.youtube.com/') {
//     //history.replaceState({id: 0}, '',);
//     chrome.runtime.sendMessage({message: 'home'});
//   }
  
//   window.addEventListener('yt-navigate-start', function() {
//     if (window.location.href.includes('/results')) {
//       //history.replaceState({id: 1}, '');
//       chrome.runtime.sendMessage({message: 'results'});

//     } else if ('/watch' === location.pathname) {
//       //history.replaceState({id: 2}, '');
//       chrome.runtime.sendMessage({message: 'watch'});
//     }
//   })
// }


// window.onload = function() {
  
  //   if (window.location.href.includes('/results')) {
    //     chrome.runtime.sendMessage({message: 'results'});
    
    //   } else if (window.location.href === 'https://www.youtube.com/') {
      //     chrome.runtime.sendMessage({message: 'home'});
      
      //   }
      // }
      
  function replyBack() {
    if (window.location.href.includes('/results')) {
      chrome.runtime.sendMessage({message: 'results'});
      
    } else if (window.location.href === 'https://www.youtube.com/') {
      chrome.runtime.sendMessage({message: 'home'});
      
    } else if ('/watch' === location.pathname) {
      chrome.runtime.sendMessage({message: 'watch'});
      
    } else if (window.location.href.includes('/user')) {
      chrome.runtime.sendMessage({message: 'user'});
    }
    
    return true
    
  }
  
  replyBack();
      
  //setTimeout(replyBack, 2000);  
  
  // function idChange() {
  //   if (history.state && history.state.id === 1) {
  //     console.log('id1')
  //   } else if (history.state && history.state.id === 2) {
  //     console.log('id2');
  //   } else if (history.state && history.state.id === 0) {
  //     console.log('id0');
  //   }

  // }

//messageBackground();








