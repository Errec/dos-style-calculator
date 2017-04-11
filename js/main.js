var key          = document.getElementsByClassName("key");
var keyDigit     = document.getElementsByClassName("key-digit");
var keyOperator  = document.getElementsByClassName("key-operators");
var inputDisplay = document.getElementById("input-display");
var keyDot       = document.getElementById("key-dot");
var keySign      = document.getElementById("key-sign");
var keyCLR       = document.getElementById("key-clr");
var operationBuff = [0, 0];
var myOperatiops = [];

for (var i = 0; i < keyDigit.length; i++) {
  keyDigit[i].onclick = function(e) {
    animateBtn(this);
    inputDisplay.textContent === '0' ? inputDisplay.textContent = this.textContent : inputDisplay.textContent += this.textContent;
  };
}


keyDot.onclick = function(e) {
  animateBtn(this);
  inputDisplay.textContent.indexOf('.') === -1 ? inputDisplay.textContent += this.textContent : '';
};

keySign.onclick = function(e) {
  animateBtn(this);
  inputDisplay.textContent[0] === '-' ? inputDisplay.textContent = inputDisplay.textContent.substr(1) : inputDisplay.textContent = '-' + inputDisplay.textContent;
};

keyCLR.onclick = function(e) {
  animateBtn(this);
  inputDisplay.textContent = '0';
};

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

function Operation(termOne, operator, termTwo) {
  this.termOne  = termOne;
  this.operator = operator;
  this.termTwo  = termTwo;

  switch(this.operator) {
    case '+':
      this.result = parseFloat(termOne) + parseFloat(termTwo);
      break;
    case '-':
      this.result = parseFloat(termOne) - parseFloat(termTwo);
      break;
    case '*':
      this.result = parseFloat(termOne) * parseFloat(termTwo);
      break;
    case '/':
      this.result = parseFloat(termOne) / parseFloat(termTwo);
      break;
  }
}
