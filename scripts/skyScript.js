var areas = document.getElementsByTagName("area");

for (var i = 0; i < areas.length; ++i) {
	areas[i].onmouseover = setOnLining;
	areas[i].onmouseout = setOutLining;
}

function setLining(event, color) {
	var elementClass = event.target.className;
	elementClass += "Lines";

	var lining = document.getElementsByClassName(elementClass);
	for (var i = 0; i < lining.length; ++i) {
		lining[i].style.stroke = color;
	}
}

function setOnLining(event) {
	setLining(event, "#35C0CD");
}

function setOutLining(event) {
	setLining(event, "transparent");
}
