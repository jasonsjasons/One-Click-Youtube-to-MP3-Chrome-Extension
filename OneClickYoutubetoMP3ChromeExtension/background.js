// takes the url from the page from where you clicked the popup and opens corresponding download link
function runthis()
{
	console.log("start message received");// works up to here	
	var query = {active: true, currentWindow: true};
	function callback(tabs) {
		var currentTab = tabs[0];
		var current_url = encodeURIComponent(currentTab.url);
		var newURL = "http://www.youtubeinmp3.com/fetch/?format=text&video="+current_url ;
		chrome.storage.sync.set({'url': newURL}, function() {//saves the url that you went to
			console.log('url saved');
		});
		chrome.tabs.create({ url: newURL });//goes to the newURL		
	}	
	chrome.tabs.query(query, callback);	
}
/*
chrome.runtime.onMessage.addListener(function(request) {
 });
  //accepts message from content.js and downloads
  */
//gets message from popup to start or content.js to download
chrome.runtime.onMessage.addListener(function(request) {
	if (request.greeting == "start")
	{
      runthis();
	}
    else if (request.greeting == "ready")
	{
		chrome.storage.sync.set({'downloadurl': request.theurl,"defaulttitle": request.defaulttitle}, function() //saves info from the message
		{
			console.log('download info saved');
		});
	    console.log("Message received that its ready to download");	  
		chrome.storage.sync.get("name", function(items)
		{
			
			thefilename=items.name;
			console.log("file name is :"+thefilename);
			console.log("file name length is: "+thefilename.length);
			if (listenercountdownload != 1) {
		console.log("downloadnow listener added");
		listenercountdownload = 1;
			chrome.downloads.onCreated.addListener(downloadlistener);
			}
				if (thefilename.length ==0)
					{	
						
						console.log("123");	
						console.log("downloading :"+request.theurl);
						chrome.downloads.download({
							url: request.theurl,
							filename: request.defaulttitle+".mp3"		
						});		
					}	
				else
				{
					console.log("321");
					console.log("downloading :"+request.theurl);
					chrome.downloads.download({
						 url: request.theurl,
						 filename: thefilename+".mp3"
					});
				}	
		});
	}
});		
	
function downloadlistener(downloaditem) 
{
			chrome.storage.sync.get("downloadcancel", function(items)
			{
				if (items.downloadcancel=="yes")
				{
					chrome.storage.sync.set({'downloadcancel': "no"}, function() //saves the url that you went to
					{
						console.log('reset downloadcancel to no');
					});
					chrome.downloads.cancel(downloaditem.id, function ()
					{
						console.log("wrong");
					});
					chrome.downloads.removeFile(downloaditem.id, function ()
					{
						console.log("faulty download stopped");
						
						chrome.runtime.onMessage.addListener(function(request)
						{
							if (request.greeting=="cancel")
							{
								console.log("is remove listern working;")
								Event.removeListener(downloadlistener);
							}
						});
						chrome.runtime.sendMessage({greeting: "cancel"}, function() 
						{
							console.log("told to remove listener");
							chrome.storage.sync.get(["url", "name"], function(items)//url was saved during run this
							{
								chrome.tabs.create({ url: items.url });
							});
						});
					});
				} else {
					if (downloaditem.totalBytes<=31000)
					{
					console.log("faulty download");
					chrome.downloads.cancel(downloaditem.id, function ()
					{
						console.log("faulty download stopped");
						
					});
					chrome.storage.sync.get(["downloadurl", "defaulttitle"],function(items)
					{
					
				
					chrome.tabs.query({url: "http://www.youtubeinmp3.com/fetch/*"}, function(tabs) {
						chrome.tabs.sendMessage(tabs[0].id, {greeting: "again"}, function(response) {
						
  });
});
					});
				
					} else {
						var query2 = {url: "http://www.youtubeinmp3.com/download/*"};
						function callback3(tabs) {
		var oldTab = tabs[0];
		var oldTabid = oldTab.id;
		chrome.tabs.remove(oldTabid);
		console.log("did i remove old tab");
		
		var query = {url: "http://www.youtubeinmp3.com/fetch/*"};
		function callback2(tabs) {
			var currentTab = tabs[0];
			var currentTabid = currentTab.id;
			chrome.tabs.remove(currentTabid);
		}
		
		chrome.tabs.query(query, callback2);
		
}

	chrome.tabs.query(query2, callback3);
	var query = {url: "http://www.youtubeinmp3.com/fetch/*"};
	function callback2(tabs) {
		var currentTab = tabs[0];
		var currentTabid = currentTab.id;
		chrome.tabs.remove(currentTabid);
	}
		
	chrome.tabs.query(query, callback2);
					} //else statement ends here
					
					
				}
				
			});
			
			
}

  
listenercountdownload = 0;
 chrome.runtime.onMessage.addListener(function(request) {		
    if (request.greeting == "converting")
	{
		if (listenercountdownload != 1) {
		console.log("downloadnow listener added");
		listenercountdownload = 1
		

		chrome.downloads.onCreated.addListener(downloadlistener);
		
		}
		
		
	}
 });
 
 