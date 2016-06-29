function runthis()
{
	var name=document.getElementById('name').value; 
	
	var query = { active: true, currentWindow: true};
	function callback(tabs) {
		var currentTab = tabs[0];
		var current_url = encodeURIComponent(currentTab.url);
		var newURL = "http://www.youtubeinmp3.com/fetch/?format=text&video="+current_url ;
		chrome.tabs.create({ url: newURL });
		var c = document.body.children[2];
		var downloadurl= c.substring[6, c.length]
		
		chrome.downloads.download({
      		url: downloadurl,
		filename: name
  });
	
		
	}
	
	chrome.tabs.query(query, callback);
	
	
	
}
document.getElementById("submit").addEventListener("click", runthis);