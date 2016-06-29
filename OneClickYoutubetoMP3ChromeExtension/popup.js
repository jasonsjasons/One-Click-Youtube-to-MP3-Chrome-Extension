

function hello() {
  console.log("success"); // works up to here
  name=document.getElementById("filename").value;
  chrome.storage.sync.set({'name': name}, function() {
          // Notify that we saved.
		  console.log("name saving was successful"+ name+ " testing123");
    });
  chrome.runtime.sendMessage({
      greeting: "hello"
    });
}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn').addEventListener('click', hello);
});

