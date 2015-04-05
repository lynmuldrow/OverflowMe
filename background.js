// * OverflowMe by Lyn Muldrow * 
//http://lynmuldrow.com
// This is a really simple Omnibox search for StackOverflow, made
//because I search StackOverflow a lot and wanted a shortcut! I 
//made it open source and freely available to iterate on- just plug in
//your target site and follow the comments to customize. This is also
//available as a extension here: http://bit.ly/1GyJvQZ
//Enjoy!



//Change this with your own keyword and text! 
function resetDefaultSuggestion() {
  chrome.omnibox.setDefaultSuggestion({
    description: 'so: Search StackOverflow for %s'
  });
}

resetDefaultSuggestion();

chrome.omnibox.onInputChanged.addListener(function(text, suggest) {

});

chrome.omnibox.onInputCancelled.addListener(function() {
  resetDefaultSuggestion();
});

function navigate(url) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.update(tabs[0].id, {url: url});
  });
}

//Plug in your site's search function here! 

chrome.omnibox.onInputEntered.addListener(function(text) {
  navigate("http://stackoverflow.com/search?q=" + text);
});