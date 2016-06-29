function runthis()
{
	console.log("message received");// works up to here	
	var query = { active: true, currentWindow: true};
	function callback(tabs) {
		var currentTab = tabs[0];
		var current_url = encodeURIComponent(currentTab.url);
		var newURL = "http://www.youtubeinmp3.com/fetch/?format=text&video="+current_url ;
		chrome.tabs.create({ url: newURL });		
	}	
	chrome.tabs.query(query, callback);	
}

chrome.runtime.onMessage.addListener(
  function(request) {
    if (request.greeting == "hello")
      runthis();
  });

  
  chrome.runtime.onMessage.addListener(function(request) {
		
    if (request.greeting == "ready")
	{
	  console.log("Message received");	  
	chrome.storage.sync.get("name", function(items)
	{
	  console.log("syncing");
	  console.log("the file name is: "+request.defaulttitle);
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
   
 