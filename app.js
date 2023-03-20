const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
      menu.classList.toggle('is-active');
      menuLinks.classList.remove('active');
    }
  };
  
  menuLinks.addEventListener('click', hideMobileMenu);
  navLogo.addEventListener('click', hideMobileMenu);


// Addition

var aquestionsRight = 0
var aquestionsTotal = -1
var aranswer = 0

function atoggle() {
  document.getElementById("abutton").style.visibility = "visible";
  document.getElementById("atextbox").style.visibility = "visible";
  document.getElementById("agrade").style.visibility = "visible";
  document.getElementById("astartbutton").style.visibility = "hidden";
  var aseconds = 120;

  function atick() {
    var acounter = document.getElementById("acounter");
    aseconds--;
    acounter.innerHTML =
      "1:" + (aseconds < 70 ? "0" : "") + String(aseconds - 60);
    if (aseconds < 60) {
    	acounter.innerHTML = "0:" + (aseconds < 10 ? "0" : "") + String(aseconds);
    }
    if (aseconds > 0) {
      setTimeout(atick, 1000);
    } else {
      document.getElementById("acounter").innerHTML = "";
      document.getElementById("atimesup").style.visibility = "visible";
      document.getElementById("abutton").style.visibility = "hidden";
      document.getElementById("atextbox").style.visibility = "hidden";
      document.getElementById("aresult").innerHTML = "You got " + agrade.innerHTML + " questions correct in 120 seconds! Try Again To Beat Your Highest Score!"
      return;
    }
  }
  atick();
}

function anew(){
var aprecision = 100; // 2 decimals
var abutton = document.getElementById("abutton")
abutton.innerText = "Next Question"
aequation=document.getElementById("aequation");
var apanswer = document.getElementById("atextbox").value
aranswer = parseFloat(aranswer)
apanswer = parseFloat(apanswer)
if(apanswer == aranswer){
aquestionsRight++
aquestionsTotal++
}else{
aquestionsTotal++
}
agrade=document.getElementById("agrade");
agrade.innerHTML=aquestionsRight + "/" + aquestionsTotal
document.querySelector('#atextbox').value = ''
var anumber1 = Math.floor(Math.random() * (100 * aprecision - 1 * aprecision) + 1 * aprecision) / (1*aprecision);
var anumber2 = Math.floor(Math.random() * (100 * aprecision - 1 * aprecision) + 1 * aprecision) / (1*aprecision);
aequationthingy = anumber1 + " + " + anumber2 + " ?"
aequation.innerHTML = aequationthingy
aranswer = anumber1 + anumber2
aranswer = aranswer.toFixed(2);
}
var ainput = document.getElementById("atextbox");
ainput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("abutton").click();
  }
});

