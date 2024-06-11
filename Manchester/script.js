
var pages = [
    '../belfast/belfast.html',
    '../birmingham/birmingham.html',
    '../glasgow/glasgow.html',
    '../london/london.html',
    '../manchester/manchester.html',
    '../brighton/brighton.html'
];

function randomPage() {
    var i = parseInt(Math.random() * pages.length);
    location.href = pages[i];
    console.log(location.href);
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


function myFunction() {
  var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
