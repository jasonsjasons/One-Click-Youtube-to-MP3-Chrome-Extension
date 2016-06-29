var defaultsetting = "no";
//set variable favColor to localstorage, else sets to "no"
function loadOptions() {
	var savedsetting = localStorage["savedsetting"];

	// valid colors are red, blue, green and yellow
	if (savedsetting == undefined || (savedsetting != "no" && savedsetting != "yes" )) {
		savedsetting = defaultsetting;
	}

	var select = document.getElementById("rename");
	for (var i = 0; i < select.children.length; i++) {
		var child = select.children[i];
			if (child.value == savedsetting) {
			child.selected = "true";
			break;
		}
	}
}

function saveOptions() {
	var select = document.getElementById("rename");
	var setting = select.children[select.selectedIndex].value;
	localStorage["savedsetting"] = setting;
}

function eraseOptions() {
	localStorage.removeItem("savedsetting");
	location.reload();
}