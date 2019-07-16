function moveArms() {
  with (new Date()) {
    h = 30 * ((getHours() % 12) + getMinutes() / 60);
    m = 6 * getMinutes(); 
    s = 6 * getSeconds(); 

    document.getElementById("second").style.cssText =
      "-webkit-transform:rotate(" + s + "deg);";
    document.getElementById("minute").style.cssText =
      "-webkit-transform:rotate(" + m + "deg);";
    document.getElementById("hour").style.cssText =
      "-webkit-transform:rotate(" + h + "deg);";

    setTimeout(moveArms, 1000); 
  }
}

window.onload = moveArms();