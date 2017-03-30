var key = document.getElementsByClassName("key");

for (var i = 0; i < key.length; i++) {
  key[i].onclick = function(e) {
    var that = this;
    that.style.top= "7px";
    that.style.left= "7px";
    that.style.boxShadow = "3px 3px 0px 0px rgba(0,0,0,1)";
    setTimeout(function() {
      that.style.top= "0px";
      that.style.left= "0px";
      that.style.boxShadow = "10px 10px 0px 0px rgba(0,0,0,1)";
    }, 100);
  };
}
