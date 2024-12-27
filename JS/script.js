console.log('hello world');

function addValue() {
    document.getElementById("totalamount").innerHTML = parseInt(document.getElementById("totalamount").innerHTML) + 1;
  }
  
  function subtractValue() {
    document.getElementById("totalamount").innerHTML = parseInt(document.getElementById("totalamount").innerHTML)  -1;
  }
 
  function myFunction() {
    document.getElementById("totalamount").reset();
  }
  
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("timer").innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

 var myname = "Ben"

 var yourname = prompt("What is your name?")

 alert ( " Hello, My name is " + myname + ", Welcome to my website " + yourname + "!");