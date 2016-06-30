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
	    console.log("Message received that its ready to download");	  
		chrome.storage.sync.get("name", function(items)
		{
			
			thefilename=items.name;
			console.log("file name is :"+thefilename);
			console.log("file name length is: "+thefilename.length);
				if (thefilename.length ==0)
					{	  
						console.log("123");			
						chrome.downloads.download({
							url: request.theurl,
							filename: request.defaulttitle+"fail.mp3"		
						});		
					}	
				else
				{
					console.log("321");
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
						console.log("download stopped");
						
						chrome.runtime.onMessage.addListener(function(request)
						{
							if (request.greeting=="cancel")
							{
								removeListener(downloadlistener);
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
				}
			});
			
}

  
 // if content2 tells you its converting
/*chrome.runtime.onMessage.addListener(function(request)//FOR SOME REASON THIS PART ISNT GETTING MESSAGE TO RETRY THE DOWNLOAD LINK FK THIS
{
			if (request.greeting=="downloadnow")
			{
				console.log("told to try the download again");
				chrome.storage.sync.get("url", function(items)//url was saved during run this
				{
					chrome.downloads.download({
						url: items.url,
						filename: "test.mp3"		
					});	 
				});
			}
						
});
*/
 chrome.runtime.onMessage.addListener(function(request) {		
    if (request.greeting == "converting")
	{
		console.log("downloadnow listener added");

		chrome.downloads.onCreated.addListener(downloadlistener);
		
		
		
		
	}
 });