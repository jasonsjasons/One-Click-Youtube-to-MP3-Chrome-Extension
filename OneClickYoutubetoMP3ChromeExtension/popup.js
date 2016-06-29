function runthis()
{
	var name=document.getElementById('name').value 
	
	var current_url = encodeURIComponent(activeTab.url);	
	var newURL = "http://www.youtubeinmp3.com/fetch/?format=text&video="+current_url ;
	chrome.downloads.download({
      url: newURL,
      filename: name
  });
	
}
document.getElementById("submit").addEventListener("click", runthis);