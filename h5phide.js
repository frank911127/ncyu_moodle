function hideupgrade(){
  var elementsToHide = document.querySelectorAll('li[aria-controls="h5p-hub-tab-panel-h5p-hub-upload"]');
  elementsToHide.forEach(element => {
    if (element.parentNode) {
        element.parentNode.removeChild(element);
    }
});
}
function hidesort(){
  var elementsToHide = document.querySelectorAll('.h5p-hub-navbar');
  elementsToHide.forEach(element => {
    if (element.parentNode) {
        element.parentNode.removeChild(element);
    }
  });
}
function hidesearch(){
  var elementsToHide = document.querySelectorAll('.h5p-hub-search-wrapper');
  elementsToHide.forEach(element => {
    if (element.parentNode) {
        element.parentNode.removeChild(element);
    }
  });
}
function hidevertical(){
  var elementsToHide = document.querySelectorAll(".h5p-or-vertical");
  elementsToHide.forEach(element => {
    if (element.parentNode) {
        element.parentNode.removeChild(element);
    }
  });
}
console.log("OK!!");
setTimeout(function() {
  hidevertical();
  hidesearch();
  hideupgrade();
  hidesort();
  console.log("OK!");
}, 500); 
