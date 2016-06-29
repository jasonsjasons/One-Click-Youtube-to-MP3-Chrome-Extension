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
function loadoptions() {

  chrome.storage.sync.get(
    "savedsetting", function(items) {
		var savedsetting = items.savedsetting;
		console.log(savedsetting);
		if (savedsetting == 'no') {
	console.log("saved setting is no")
	document.getElementById("wholepopup").innerHTML = "downloading automatically";
} else if (savedsetting == 'yes') {
	console.log("saved setting is yes")
} 
	} 
  );
}
document.addEventListener('DOMContentLoaded', loadoptions);

document.getElementById("submit").addEventListener("click", runthis);