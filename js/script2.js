"use strict";
(function() {
  
function ready() {
  
    let getDataFromStorage = JSON.parse(
    localStorage.getItem('inputData')

);
document.querySelector('#mainContent').appendChild(createTree(getDataFromStorage));
}

function createTree(args) {
  const ul = document.createElement('ul');
  for (let key in args) {
      const li = document.createElement('li');
          li.textContent = key + ' - ' + args[key];            
      ul.appendChild(li);       
  }
  return ul;
}  
document.addEventListener("DOMContentLoaded",ready);
    
})();