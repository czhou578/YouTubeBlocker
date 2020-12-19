//console.log(document.getElementsByTagName("h1"));
document.getElementById('title').style.margin = "10px";
document.getElementById('title').style.color = "red";

var x = document.getElementsByClassName("hide");
for (let i = 0; i < x.length; i++) {
  x[i].style.padding = "5px";
  x[i].style.backgroundColor = "tan";
  x[i].style.margin = "4px";
}

function includeScript(file) {
  var script = document.createElement('script');
  script.src = file;
  script.type = 'text/javascript',
  script.async = true;
  document.body.appendChild(script);
}

document.getElementById('hidden').addEventListener('click', function() {
  var paragraph = document.createElement('p');
  paragraph.innerHTML = 'This extension blocks YouTube home video recommendations and watch recommendations. '
  + 'Stop distractions and take ownership of your life! Once activated, this cannot be turned off unless you uninstall!';
  paragraph.style.fontSize = '15px'
  document.body.appendChild(paragraph);
  includeScript('content.js');
  includeScript('background.js');
  console.log('complete')
})


