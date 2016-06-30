

function hello() {
  console.log("success"); 
  if (savedsetting == 'no') {
	console.log("saved setting is no");
	
	
	} else {
		name=document.getElementById("filename").value;
	}
  
  chrome.storage.sync.set({'name': name}, function() {
    // saves user inputted file name
	console.log("name saving was successful"+ name+ " testing123");
  });
  chrome.runtime.sendMessage({greeting: "start"});
}
document.addEventListener('DOMContentLoaded', loadoptions);
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn').addEventListener('click', hello);//calls hello function after button is clicked
});

function loadoptions() {

  chrome.storage.sync.get(
    "savedsetting", function(items) {
		savedsetting = items.savedsetting;
		console.log(savedsetting);
		if (savedsetting == 'no') {
	console.log("saved setting is no");
	document.getElementById("wholepopup").innerHTML = "downloading automatically";
	hello();
} else if (savedsetting == 'yes') {
	console.log("saved setting is yes")
} 
	} 
  );
}
