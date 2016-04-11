window.onresize = displayWindowSize;
window.onload = displayWindowSize;

function displayWindowSize() {
  myWidth = window.innerWidth;
  myHeight = window.innerHeight;
  // your size calculation code here
  document.getElementById("dimensions").innerHTML = myWidth + "x" + myHeight;
};
