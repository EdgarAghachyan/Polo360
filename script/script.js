var slideIndex = 1;
var currentTimer;
showSlides(slideIndex);

function changeSlide(n) {
  showSlides(slideIndex = n);
};

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dotds = document.getElementsByClassName("slideShowMenuItem");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dotds.length; i++) {
      dotds[i].className = dotds[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";  
    dotds[slideIndex-1].className += " active";
    if (currentTimer != null) {
      clearTimeout(currentTimer); 
      currentTimer = null;
    }
    currentTimer = setTimeout(showSlides, 2000);
  };
  