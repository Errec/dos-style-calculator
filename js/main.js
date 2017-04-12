var key               = document.getElementsByClassName("key");
var keyDigit          = document.getElementsByClassName("key-digit");
var keyOperator       = document.getElementsByClassName("key-operators");
var inputDisplay      = document.getElementById("input-display");
var keyDot            = document.getElementById("key-dot");
var keySign           = document.getElementById("key-sign");
var keyCLR            = document.getElementById("key-clr");
var keyResult         = document.getElementById("key-result");
var displayTermOne    = document.getElementById("term-one");
var displayTermTwo    = document.getElementById("term-two");
var displayTermResult = document.getElementById("term-result");
var operationBuff     = [1, 0, 0, null]; // [term number: first(1) or second(2), first term value, second term value, sign]
var myOperations      = [];

for (var i = 0; i < keyDigit.length; i++) {
  keyDigit[i].onclick = function(e) {
    animateBtn(this);
    checkBuff();
    inputDisplay.textContent === '0' ? inputDisplay.textContent = this.textContent : inputDisplay.textContent += this.textContent;
    if (inputDisplay.textContent !== '0' && inputDisplay.textContent !== '-0' && inputDisplay.textContent !== '0.' && inputDisplay.textContent !== '-0.') {
      updateBuff();
    }
  };
}

for (var i = 0; i < keyOperator.length; i++) {
  keyOperator[i].onclick = function(e) {
    animateBtn(this);
    if(inputDisplay.textContent === '0' || inputDisplay.textContent === '-0' || inputDisplay.textContent === '0.' || inputDisplay.textContent === '-0.') {
      operationBuff[3] = this.textContent;
      return;
    } else {
        if(operationBuff[0] === 1) {
          inputDisplay.textContent = '0';
          operationBuff[3]         = this.textContent;
          operationBuff[0]         = 2;
        } else {
            myOperations.push(new Operation(operationBuff[1], operationBuff[3], operationBuff[2]));
            inputDisplay.textContent = '0';
            operationBuff[1]         = myOperations[myOperations.length - 1].result;
            operationBuff[2]         = 0;
            operationBuff[3]         = this.textContent;
        }
    }
  };
}

keyDot.onclick = function(e) {
  animateBtn(this);
  checkBuff();
  inputDisplay.textContent.indexOf('.') === -1 ? inputDisplay.textContent += this.textContent : '';
  updateBuff();
};

keySign.onclick = function(e) {
  animateBtn(this);
  checkBuff();
  inputDisplay.textContent[0] === '-' ? inputDisplay.textContent = inputDisplay.textContent.substr(1) : inputDisplay.textContent = '-' + inputDisplay.textContent;
  updateBuff();
};

keyCLR.onclick = function(e) {
  animateBtn(this);
  inputDisplay.textContent = '0';
  updateBuff();
}; // TODO: reset buff

keyResult.onclick = function(e) {
  animateBtn(this);
  if(operationBuff[0] === 2 && !(inputDisplay.textContent === '0' || inputDisplay.textContent === '-0' || inputDisplay.textContent === '0.' || inputDisplay.textContent === '-0.')) {
    myOperations.push(new Operation(operationBuff[1], operationBuff[3], operationBuff[2]));
    operationBuff[0] = 1;
    operationBuff[1] = 0;
    operationBuff[2] = 0;
    operationBuff[3] = null;
    inputDisplay.textContent = '0';
  }
};

function animateBtn(btn) {
  btn.style.top       = "7px";
  btn.style.left      = "7px";
  btn.style.boxShadow = "3px 3px 0px 0px rgba(0,0,0,1)";
  setTimeout(function() {
    btn.style.top       = "0px";
    btn.style.left      = "0px";
    btn.style.boxShadow = "10px 10px 0px 0px rgba(0,0,0,1)";
  }, 100);
}

function Operation(termOne, operator, termTwo) {
  this.termOne  = termOne;
  this.operator = operator;
  this.termTwo  = termTwo;

  switch(this.operator) {
    case '+':
      this.result = termOne + termTwo;
      break;
    case '-':
      this.result = termOne - termTwo;
      break;
    case '*':
      this.result = termOne * termTwo;
      break;
    case '÷':
      this.result = termOne / termTwo;
      break;
  }
}

function checkBuff() {
  if (operationBuff[3] !== null) {
    operationBuff[0] = 2;
  }
}

function updateBuff(){
  operationBuff[0] === 1 ? operationBuff[1] = parseFloat(inputDisplay.textContent) : operationBuff[2] = parseFloat(inputDisplay.textContent);
}

function updateDisplay(index) {
  var operation = myOperations[index];
  displayTermOne.textContent = operation.termOne + " " + operation.operator;
  displayTermTwo.textContent = operation.termTwo + " =";
  displayTermResult.textContent = operation.result;
}
