/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
var testNav = 0;
function openNav() {
    if (testNav == 0) {
        document.getElementById("mysmartMenu").style.width = "250px";
        // document.getElementById("main").style.marginLeft = "240px";
        document.getElementById("bg-id").style.opacity = "0";
        document.body.style.backgroundColor = "black";
        testNav = 1;
    } else {
        testNav = 0;
        document.getElementById("mysmartMenu").style.width = "0";
        // document.getElementById("main").style.marginLeft = "0";
        document.getElementById("bg-id").style.opacity = "1";
    }
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mysmartMenu").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("bg-id").style.opacity = "1";
}
var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}
// When the user scrolls down 20px from the top of the document, show the button
window.addEventListener('scroll', function (e) {
    var bgId = document.getElementById('bg-id');
    if (bgId.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}, ture) // true ca sa se execute si in div

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    var bgId = document.getElementById('bg-id');
    bgId.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function getFontName(){
    var elem = document.getElementById("titleVideo");
    var theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("font-family");
    document.getElementById("div-font-family").innerHTML = theCSSprop;
  }

  function showHideElement() {
    var x = document.getElementById("toHide");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function clickCounter() {
    if(typeof(Storage) !== "undefined") {
      document.getElementById("result").innerHTML = "Page has been accesed " + localStorage.clickcount + " time(s).";
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }