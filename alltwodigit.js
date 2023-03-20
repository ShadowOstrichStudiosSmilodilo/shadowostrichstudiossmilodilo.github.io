// all1digit

var tquestionsRight = 0
var tquestionsTotal = -1
var transwer = 0

function ttoggle() {
  document.getElementById("tbutton").style.visibility = "visible";
  document.getElementById("ttextbox").style.visibility = "visible";
  document.getElementById("tgrade").style.visibility = "visible";
  document.getElementById("tstartbutton").style.visibility = "hidden";
  var tseconds = 120;

  function ttick() {
    var tcounter = document.getElementById("tcounter");
    tseconds--;
    tcounter.innerHTML =
      "1:" + (tseconds < 70 ? "0" : "") + String(tseconds - 60);
    if (tseconds < 60) {
    	tcounter.innerHTML = "0:" + (tseconds < 10 ? "0" : "") + String(tseconds);
    }
    if (tseconds > 0) {
      setTimeout(ttick, 1000);
    } else {
      document.getElementById("tcounter").innerHTML = "";
      document.getElementById("ttimesup").style.visibility = "visible";
      document.getElementById("tbutton").style.visibility = "hidden";
      document.getElementById("ttextbox").style.visibility = "hidden";
      document.getElementById("tresult").innerHTML = "You got " + tgrade.innerHTML + " questions correct in 120 seconds! Try Again To Beat Your Highest Score!"
      return;
    }
  }
  ttick();
}

function tnew() {

  var tbutton = document.getElementById("tbutton")
  tbutton.innerText = "Next Question"
  tproblem = document.getElementById("tproblem");
  var tpanswer = document.getElementById("ttextbox").value
  transwer = parseFloat(transwer)
  tpanswer = parseFloat(tpanswer)
  if (tpanswer == transwer) {
    tquestionsRight++
    tquestionsTotal++
  } else {
    tquestionsTotal++
  }
  tgrade = document.getElementById("tgrade");
  tgrade.innerHTML = tquestionsRight + "/" + tquestionsTotal
  document.querySelector('#ttextbox').value = ''
  var tnumber1 = Math.floor(Math.random() * (100) + 1)
  var tnumber2 = Math.floor(Math.random() * (100) + 1)
  var taddWord = 0
  var tops = ['+', '-', '*', '/'];
  var ttheRandomNumber = Math.floor(Math.random() * (4));
  var ttheRandomOperator = tops[ttheRandomNumber]
  if (ttheRandomOperator == "+") {
    transwer = tnumber1 + tnumber2
    taddWord = "If Jamie has " + tnumber1 + " kills in Fortnite and he gets " + tnumber2 + " more kills, how many kills does he have in total?"
  } else if (ttheRandomOperator == "-") {
    transwer = tnumber1 - tnumber2
    taddWord = "If Niko has " + tnumber1 + " brain cells and he loses " + tnumber2 + ", how many brain cells does he have left?"
  } else if (ttheRandomOperator == "*") {
    transwer = tnumber1 * tnumber2
    taddWord = "Elijah mined " + tnumber1 + " diamonds on the first day. The next day, he mined " + tnumber2 + " times more diamonds. How many diamonds did he mine on the second day?"
  } else {
    transwer = tnumber1 / tnumber2
    taddWord = "Artis caught " + tnumber1 + " pokemon for his " + tnumber2 + " friends. He gives them all an equal amount of pokemon. How many pokemon does each person have? (Round to the nearest tenth)"
  }
  transwer = transwer.toFixed(1);


  tproblem.innerHTML = taddWord
}
var tinput = document.getElementById("ttextbox");
tinput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("tbutton").click();
  }
});
