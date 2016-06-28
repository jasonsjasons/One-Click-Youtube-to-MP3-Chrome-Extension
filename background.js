chrome.browserAction.onClicked.addListener(function(activeTab) {
	 var current_url = encodeURIComponent(activeTab.url);
	
	 var newURL = "http://www.youtubeinmp3.com/fetch/?video="+current_url ;
	
	 chrome.tabs.create({ url: newURL });
	 while (true)
	 {
     document.getElementByClassName("button fullWidth").click();
     }
	 
	 
 });
