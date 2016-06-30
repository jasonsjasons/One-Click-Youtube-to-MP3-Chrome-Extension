
function loadoptions() {

  chrome.storage.sync.get({
    savedsetting: 'no'
	//saveddirectory: "success"
    
  }, function(items) {
    document.getElementById('rename').value = items.savedsetting;
	//document.getElementById('repository').value = items.saveddirectory;

  });
}


function saveOptions() 
{
	console.log("saving settings");
	var select = document.getElementById("rename");
	var setting = select.children[select.selectedIndex].value;
	//var selects = document.getElementById("repository");
	//var directory= selects.value;
	chrome.storage.sync.set({'savedsetting': setting/*, "saveddirectory": directory*/}, function() {
          // Notify that we saved.
          console.log('Settings saved');
    });
	
}



document.addEventListener('DOMContentLoaded', loadoptions);
document.getElementById("save").addEventListener("click", saveOptions);

	 
	 

