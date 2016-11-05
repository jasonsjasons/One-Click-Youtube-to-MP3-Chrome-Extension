//document.getElementById("download").click();


var c = document.body.childNodes[4].nodeValue;
downloadurl= c.substring(6, c.length);
var a = document.body.childNodes[0].nodeValue;
var title= a.substring(7, a.length);
title = title.replace(/\//g,'');
title = title.replace(/\`/g,'');
title = title.replace(/\\/g,'');
title = title.replace(/\!/g,'');
title = title.replace(/\*/g,'');
title = title.replace(/\#/g,'');
title = title.replace(/\%/g,'');
title = title.replace(/\&/g,'');
title = title.replace(/\</g,'');
title = title.replace(/\>/g,'');
title = title.replace(/\?/g,'');
title = title.replace(/\$/g,'');
title = title.replace(/\:/g,'');
title = title.replace(/\@/g,'');
title = title.replace(/\+/g,'');
title = title.replace(/\=/g,'');
title = title.replace(/\'/g,'');
title = title.replace(/\"/g,'');
title = title.replace(/\s/g, '');
title = title.replace(/\|/g, '');
console.log(title+ "is title");

chrome.runtime.sendMessage({greeting: "ready", theurl: downloadurl, defaulttitle: title}, function() {
	console.log("success");
});
chrome.runtime.onMessage.addListener(function(request) {		
    if (request.greeting == "again")
	{
		chrome.runtime.sendMessage({greeting: "ready", theurl: downloadurl, defaulttitle: title}, function() {
	console.log("message relayed boo yah");
});
		
		
	}
 });
/*
chrome.runtime.sendMessage({greeting: "closetabsplease"}, function() {
	console.log("success to close tabs please");
});
*/

/* useless 
var query = {active: true, currentWindow: true};
function callback2(tabs) {
	var currentTab = tabs[0];
	chrome.tabs.remove(currentTab);
}

chrome.tabs.query(query, callback2);
*/

