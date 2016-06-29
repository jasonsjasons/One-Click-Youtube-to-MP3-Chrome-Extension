/*chrome.browserAction.onClicked.addListener(function(activeTab) {
	 var current_url = encodeURIComponent(activeTab.url);
	
	 var newURL = "http://www.youtubeinmp3.com/fetch/?format=text&video="+current_url ;
	 chrome.tabs.create({ url: newURL });
	 console.log("got up to here");
	 /*
	 document.addEventListener('DOMContentLoaded', function () {
		 console.log("url detected as loaded");
	var c = document.body.children[4].textContent;
     console.log(c);
	 var downloadurl= c.substring[6, c.length];
	 console.log(downloadurl);
	 })
  */  

	 
	 /*chrome.downloads.download({
  url: "http://www.youtubeinmp3.com/download/get/?i=fCU6CyNH2K81eOW2AhGUqF%2BYv9OuyAo8xfIYl314aE5VqW2NNGIxyqkGMS9EUTHwTgVd1ZyAYV32gAi1LYJWSA%3D%3D",
  filename: "test.mp3"
  });
	 
	 
 });*/
 chrome.browserAction.onClicked.addListener(function(activeTab) {
	 
	 console.log("got up to here");
	  chrome.tabs.executeScript({file: "eventpage.js"}, function() {
		console.log("script executed");
        
    });
	 


	 });
 chrome.runtime.onMessage.addListener(function(request) {				
    if (request.greeting == "hello")
	  console.log("Message received");
      console.log(request.theurl);
 });

	 
	 /*chrome.downloads.download({
  url: "http://www.youtubeinmp3.com/download/get/?i=fCU6CyNH2K81eOW2AhGUqF%2BYv9OuyAo8xfIYl314aE5VqW2NNGIxyqkGMS9EUTHwTgVd1ZyAYV32gAi1LYJWSA%3D%3D",
  filename: "test.mp3"
  });
	 
	 
 });*/
