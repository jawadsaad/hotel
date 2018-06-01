var slideIndex = [1,1,1];
var slideId = ["standard-room-slides", "junior-suite-slides", "presidential-suite-slides"];
showSlides(1,0);
showSlides(1,1);
showSlides(1,2);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

// Thumbnail image controls
function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
  var i;
  var slides = document.getElementsByClassName(slideId[no]);
//  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex[no] = 1} 
  if (n < 1) {slideIndex[no] = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
//  for (i = 0; i < dots.length; i++) {
//      dots[i].className = dots[i].className.replace(" active", "");
//  }
  slides[slideIndex[no]-1].style.display = "block"; 
//  dots[slideIndex-1].className += " active";
}
