var key = document.getElementsByClassName("key");
var keyDigit = document.getElementsByClassName("key-digit");
var inputDisplay = document.getElementById("term-input");

for (var i = 0; i < key.length; i++) {
  key[i].onclick = function(e) {
    animateBtn(this);
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
