//document.getElementById("download").click();
//document.body.style.background = 'yellow'; didnt work for some reason


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


/*chrome.storage.sync.set({'title': title}, function() {
          // Notify that we saved.
		  console.log("title was saved");
    });
	*/
console.log(title+ "is title");
chrome.runtime.sendMessage({greeting: "ready", theurl: downloadurl, defaulttitle: title}, function(response) {
  console.log("success");
});
alert("content ran");