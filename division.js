// Division

var dquestionsRight = 0;
var dquestionsTotal = -1;
var dranswer = 0;

function dtoggle() {
  document.getElementById("dbutton").style.visibility = "visible";
  document.getElementById("dtextbox").style.visibility = "visible";
  document.getElementById("dgrade").style.visibility = "visible";
  document.getElementById("dstartbutton").style.visibility = "hidden";
  var dseconds = 120;

  function dtick() {
    var dcounter = document.getElementById("dcounter");
    dseconds--;
    dcounter.innerHTML =
      "1:" + (dseconds < 70 ? "0" : "") + String(dseconds - 60);
    if (dseconds < 60) {
    	dcounter.innerHTML = "0:" + (dseconds < 10 ? "0" : "") + String(dseconds);
    }
    if (dseconds > 0) {
      setTimeout(dtick, 1000);
    } else {
      document.getElementById("dcounter").innerHTML = "";
      document.getElementById("dtimesup").style.visibility = "visible";
      document.getElementById("dbutton").style.visibility = "hidden";
      document.getElementById("dtextbox").style.visibility = "hidden";
      document.getElementById("dresult").innerHTML = "You got " + dgrade.innerHTML + " questions correct in 120 seconds! Try Again To Beat Your Highest Score!"
      return;
    }
  }
  dtick();
}

function dnew(){
var dbutton = document.getElementById("dbutton")
dbutton.innerText = "Next Question"
dequation=document.getElementById("dequation");
var dpanswer = document.getElementById("dtextbox").value
dranswer = parseFloat(dranswer)
dpanswer = parseFloat(dpanswer)
if(dpanswer == dranswer){
dquestionsRight++
dquestionsTotal++
}else{
dquestionsTotal++
}
dgrade  =document.getElementById("dgrade");
dgrade.innerHTML = dquestionsRight + "/" + dquestionsTotal
document.querySelector('#dtextbox').value = ''
var dnumber1 = Math.floor(Math.random() * (101))
var dnumber2 = Math.floor(Math.random() * (101))
dequationthingy = dnumber1 + " / " + dnumber2 + " ?"
dequation.innerHTML = dequationthingy
dranswer = dnumber1 / dnumber2
dranswer = dranswer.toFixed(1);
}
var dinput = document.getElementById("dtextbox");
dinput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("dbutton").click();
  }
});
