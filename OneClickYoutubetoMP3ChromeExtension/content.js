//document.getElementById("download").click();


var c = document.body.childNodes[4].nodeValue;
var downloadurl= c.substring(6, c.length);
var a = document.body.childNodes[0].nodeValue;
var title= a.substring(7, a.length);
title = title.replace(/\//g,'');
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

console.log(title+ "is title");

chrome.runtime.sendMessage({greeting: "ready", theurl: downloadurl, defaulttitle: title}, function() {
	console.log("success");
});
