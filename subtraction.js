// Subtraction

var squestionsRight = 0;
var squestionsTotal = -1;
var sranswer = 0;

function stoggle() {
  document.getElementById("sbutton").style.visibility = "visible";
  document.getElementById("stextbox").style.visibility = "visible";
  document.getElementById("sgrade").style.visibility = "visible";
  document.getElementById("sstartbutton").style.visibility = "hidden";
  var sseconds = 120;

  function stick() {
    var scounter = document.getElementById("scounter");
    sseconds--;
    scounter.innerHTML =
      "1:" + (sseconds < 70 ? "0" : "") + String(sseconds - 60);
    if (sseconds < 60) {
    	scounter.innerHTML = "0:" + (sseconds < 10 ? "0" : "") + String(sseconds);
    }
    if (sseconds > 0) {
      setTimeout(stick, 1000);
    } else {
      document.getElementById("scounter").innerHTML = "";
      document.getElementById("stimesup").style.visibility = "visible";
      document.getElementById("sbutton").style.visibility = "hidden";
      document.getElementById("stextbox").style.visibility = "hidden";
      document.getElementById("sresult").innerHTML = "You got " + sgrade.innerHTML + " questions correct in 120 seconds! Try Again To Beat Your Highest Score!"
      return;
    }
  }
  stick();
}

function snew(){
var sprecision = 100; // 2 decimals
var sbutton = document.getElementById("sbutton")
sbutton.innerText = "Next Question"
sequation=document.getElementById("sequation");
var spanswer = document.getElementById("stextbox").value
sranswer = parseFloat(sranswer)
spanswer = parseFloat(spanswer)
if(spanswer == sranswer){
squestionsRight++
squestionsTotal++
}else{
squestionsTotal++
}
sgrade  =document.getElementById("sgrade");
sgrade.innerHTML = squestionsRight + "/" + squestionsTotal
document.querySelector('#stextbox').value = ''
var snumber1 = Math.floor(Math.random() * (100 * sprecision - 1 * sprecision) + 1 * sprecision) / (1*sprecision);
var snumber2 = Math.floor(Math.random() * (100 * sprecision - 1 * sprecision) + 1 * sprecision) / (1*sprecision);
sequationthingy = snumber1 + " - " + snumber2 + " ?"
sequation.innerHTML = sequationthingy
sranswer = snumber1 - snumber2
sranswer = sranswer.toFixed(2);
}
var sinput = document.getElementById("stextbox");
sinput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("sbutton").click();
  }
});
