/*function getTime() {
  with (new Date()) {
    Var h = getHours();
    if (h < 10) {
        h = "0" + h
        };
    var m = getMinutes();
        if (m < 10) {
        m = "0" + m
        };
    var s = getSeconds();
        if (s < 10) {
        s = "0" + s
        };
    var meridian = "AM"
    if (h > 11) {
        meridian = "PM"
        };
  document.getElementById("currentTime").innerHTML = h + m + s + meridian;
  setTimeout(getTime, 1000);
  }
}

window.onload = getTime;*/

/*var showCurrentTime = function() {
	var clock = document.getElementById("clock");
        var currentTime = new Date();
	var h = currentTime.getHours();
	var m = currentTime.getMinutes();
	var s = currentTime.getSeconds();
	var meridian = "AM";
	
	if (h > 11) {
	h = h - 12;
	meridian = "PM";
	}
	if (m < 10) {
	m = "0" + m;
	}
	if (s < 10) {
	s = "0" + s;
	}
	var clockTime = h + ":" + m + ":" + s + " " + meridian + "!"
	clock.innerText = clockTime;
}*/
	
	var h = getHours();
	var m = getMinutes();
	var s = getSeconds();
	var meridian = "AM";
	
	if (h > 11) {
	h = h - 12;
	meridian = "PM";
	}
	if (m < 10) {
	m = "0" + m;
	}
	if (s < 10) {
	s = "0" + s;
	}
	document.getElementById("clock").innerHTML = h + ":" + m + ":" + s + " " + meridian + "!";



