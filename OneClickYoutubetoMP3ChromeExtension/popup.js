

function hello() {
  console.log("success"); 
  name=document.getElementById("filename").value;
  chrome.storage.sync.set({'name': name}, function() {
    // saves user inputted file name
	console.log("name saving was successful"+ name+ " testing123");
  });
  chrome.runtime.sendMessage({greeting: "start"});
}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn').addEventListener('click', hello);//calls hello function after button is clicked
});

