var slideIndex = [1,1,1,1,1,1];
var slideId = ["hotel-gallery-slides", "room-gallery-slides", "dining-gallery-slides", "events-gallery-slides", "gallery-section-slides", "gallery-section-large-slides"];
var hotelSlides = document.getElementById("gallery-slides-container");
//showSlides(1,0);
//showSlides(1,1);
//showSlides(1,2);
//showSlides(1,3);
showSlides(1,4);
showSlides(1,5);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function switchGalleryDisplay(n, no) {
  showSlides(slideIndex[no] = n, no);
  showSlides(slideIndex[5] = n, 5);
}

// Thumbnail image controls
function currentSlide(n, no) {
  hotelSlides.classList.remove("no-display");
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


var closeHotelBtn = document.getElementById("close-hotel-gal");


function closeHotelSlides() {
    hotelSlides.classList.add("no-display");
}