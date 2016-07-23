/*global chrome:true*/

/*
  isTrumpPence tests a urlString if it's a Trump Pence related image
*/
function isTrumpPence(urlString) {
  var found = urlString.match(/trump|pence/i);
  if (found) {
    return true;
  }
  return false;
}

/*
  convertImageTags swaps in the original Trump-Pence logo
*/
function convertImageTags() {
  [].forEach.call(document.getElementsByTagName("img"), function(imgTag) {
    if (isTrumpPence(imgTag.src) || isTrumpPence(imgTag.srcset)) {
      imgTag.src = chrome.extension.getURL("images/tp_new_logo@2x.png");
      imgTag.srcset = chrome.extension.getURL("images/tp_new_logo@2x.png") + " 2x";      
    }
  });
}

// Make it Great!
convertImageTags();
