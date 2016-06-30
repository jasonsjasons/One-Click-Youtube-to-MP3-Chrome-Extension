//activates on convert link
console.log("contenttwo activated");
chrome.storage.sync.set({'downloadcancel': "yes"}, function() //saves the url that you went to
{
	console.log('reset downloadcancel');
});
chrome.runtime.sendMessage({greeting: "converting"}, function() {
  console.log("content2 message sent");
  document.getElementById("download").click();
});
