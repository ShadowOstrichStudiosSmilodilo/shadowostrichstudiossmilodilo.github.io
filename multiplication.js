// Multiplication

var mquestionsRight = 0;
var mquestionsTotal = -1;
var mranswer = 0;

function mtoggle() {
  document.getElementById("mbutton").style.visibility = "visible";
  document.getElementById("mtextbox").style.visibility = "visible";
  document.getElementById("mgrade").style.visibility = "visible";
  document.getElementById("mstartbutton").style.visibility = "hidden";
  var mseconds = 120;

  function mtick() {
    var mcounter = document.getElementById("mcounter");
    mseconds--;
    mcounter.innerHTML =
      "1:" + (mseconds < 70 ? "0" : "") + String(mseconds - 60);
    if (mseconds < 60) {
    	mcounter.innerHTML = "0:" + (mseconds < 10 ? "0" : "") + String(mseconds);
    }
    if (mseconds > 0) {
      setTimeout(mtick, 1000);
    } else {
      document.getElementById("mcounter").innerHTML = "";
      document.getElementById("mtimesup").style.visibility = "visible";
      document.getElementById("mbutton").style.visibility = "hidden";
      document.getElementById("mtextbox").style.visibility = "hidden";
      document.getElementById("mresult").innerHTML = "You got " + mgrade.innerHTML + " questions correct in 120 seconds! Try Again To Beat Your Highest Score!"
      return;
    }
  }
  mtick();
}

function mnew(){
var mbutton = document.getElementById("mbutton")
mbutton.innerText = "Next Question"
mequation=document.getElementById("mequation");
var mpanswer = document.getElementById("mtextbox").value
mranswer = parseFloat(mranswer)
mpanswer = parseFloat(mpanswer)
if(mpanswer == mranswer){
mquestionsRight++
mquestionsTotal++
}else{
mquestionsTotal++
}
mgrade  =document.getElementById("mgrade");
mgrade.innerHTML = mquestionsRight + "/" + mquestionsTotal
document.querySelector('#mtextbox').value = ''
var mnumber1 = Math.floor(Math.random() * (101))
var mnumber2 = Math.floor(Math.random() * (101))
mequationthingy = mnumber1 + " * " + mnumber2 + " ?"
mequation.innerHTML = mequationthingy
mranswer = mnumber1 * mnumber2
mranswer = mranswer.toFixed(2);
}
var minput = document.getElementById("mtextbox");
minput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("mbutton").click();
  }
});
