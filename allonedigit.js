// all1digit

var oquestionsRight = 0
var oquestionsTotal = -1
var oranswer = 0

function otoggle() {
  document.getElementById("obutton").style.visibility = "visible";
  document.getElementById("otextbox").style.visibility = "visible";
  document.getElementById("ograde").style.visibility = "visible";
  document.getElementById("ostartbutton").style.visibility = "hidden";
  var oseconds = 120;

  function otick() {
    var ocounter = document.getElementById("ocounter");
    oseconds--;
    ocounter.innerHTML =
      "1:" + (oseconds < 70 ? "0" : "") + String(oseconds - 60);
    if (oseconds < 60) {
    	ocounter.innerHTML = "0:" + (oseconds < 10 ? "0" : "") + String(oseconds);
    }
    if (oseconds > 0) {
      setTimeout(otick, 1000);
    } else {
      document.getElementById("ocounter").innerHTML = "";
      document.getElementById("otimesup").style.visibility = "visible";
      document.getElementById("obutton").style.visibility = "hidden";
      document.getElementById("otextbox").style.visibility = "hidden";
      document.getElementById("oresult").innerHTML = "You got " + ograde.innerHTML + " questions correct in 300 seconds! Try Again To Beat Your Highest Score!"
      return;
    }
  }
  otick();
}

function onew() {

  var obutton = document.getElementById("obutton")
  obutton.innerText = "Next Question"
  oproblem = document.getElementById("oproblem");
  var opanswer = document.getElementById("otextbox").value
  oranswer = parseFloat(oranswer)
  opanswer = parseFloat(opanswer)
  if (opanswer == oranswer) {
    oquestionsRight++
    oquestionsTotal++
  } else {
    oquestionsTotal++
  }
  ograde = document.getElementById("ograde");
  ograde.innerHTML = oquestionsRight + "/" + oquestionsTotal
  document.querySelector('#otextbox').value = ''
  var onumber1 = Math.floor(Math.random() * (10) + 1)
  var onumber2 = Math.floor(Math.random() * (10) + 1)
  var oaddWord = 0
  var oops = ['+', '-', '*', '/'];
  var otheRandomNumber = Math.floor(Math.random() * (4));
  var otheRandomOperator = oops[otheRandomNumber]
  if (otheRandomOperator == "+") {
    oranswer = onumber1 + onumber2
    oaddWord = "If Jamie has " + onumber1 + " kills in Fortnite and he gets " + onumber2 + " more kills, how many kills does he have in total?"
  } else if (otheRandomOperator == "-") {
    oranswer = onumber1 - onumber2
    oaddWord = "If Niko has " + onumber1 + " brain cells and he loses " + onumber2 + ", how many brain cells does he have left?"
  } else if (otheRandomOperator == "*") {
    oranswer = onumber1 * onumber2
    oaddWord = "Elijah mined " + onumber1 + " diamonds on the first day. The next day, he mined " + onumber2 + " times more diamonds. How many diamonds did he mine on the second day?"
  } else {
    oranswer = onumber1 / onumber2
    oaddWord = "Artis caught " + onumber1 + " pokemon for his " + onumber2 + " friends. He gives them all an equal amount of pokemon. How many pokemon does each person have? (Round to the nearest tenth)"
  }
  oranswer = oranswer.toFixed(1);


  oproblem.innerHTML = oaddWord
}
var oinput = document.getElementById("otextbox");
oinput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("obutton").click();
  }
});