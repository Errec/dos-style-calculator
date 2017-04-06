var key = document.getElementsByClassName("key");
var keyDigit = document.getElementsByClassName("key-digit");
var inputDisplay = document.getElementById("term-input");

for (var i = 0; i < keyDigit.length; i++) {
  keyDigit[i].onclick = function(e) {
    animateBtn(this);
    inputDisplay.textContent === '0' ? inputDisplay.textContent = this.textContent : inputDisplay.textContent += this.textContent;
  };
}

function animateBtn(btn) {
  btn.style.top= "7px";
  btn.style.left= "7px";
  btn.style.boxShadow = "3px 3px 0px 0px rgba(0,0,0,1)";
  setTimeout(function() {
    btn.style.top= "0px";
    btn.style.left= "0px";
    btn.style.boxShadow = "10px 10px 0px 0px rgba(0,0,0,1)";
  }, 100);
}
