//document.getElementById("download").click();
//document.body.style.background = 'yellow'; didnt work for some reason


var c = document.body.childNodes[4].nodeValue;
var downloadurl= c.substring(6, c.length);
//console.log(c);
//var string="yo "+c;
//console.log(string);
console.log(downloadurl);
chrome.runtime.sendMessage({greeting: "hello", theurl: downloadurl}, function(response) {
  console.log("success");
});
alert("yay");