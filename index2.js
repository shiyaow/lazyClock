/*var h = clock.getHours();
var m = clock.getMinutes();
var s = clock.getSeconds();

	
*/

function showTime(){
var clock = new Date();
var h = clock.getHours();
var m = clock.getMinutes();
var s = clock.getSeconds();
var meridian = "AM";

if (h > 11) {
h = h - 12;
meridian = "PM";
};
if (meridian == 'AM') {
document.getElementById("greetings").innerHTML = "Have a lovely morning!"
};
if (meridian =='PM' & h < 5) {
    document.getElementById("greetings").innerHTML ="Getting close to THE GLOURIOUS 5"
};
if (h > 5 & meridian =='PM'){
    document.getElementById("greetings").innerHTML = "Paaaarty Time"
}
if (m < 10) {
m = "0" + m;
};
if (s < 10) {
s = "0" + s;
};

document.getElementById("clock").innerHTML = h + ":" + m +":" + s + meridian + "!";
    
setTimeout(showTime, 1000);
}

window.onload = showTime;
