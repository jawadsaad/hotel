var slideIndex = [1,1,1,1,1,1,1,1];
var slideId = ["welcome-slides", "standard-room-slides", "junior-suite-slides", "presidential-suite-slides", "business-slides", "private-dining-slides", "wedding-slides", "culture-slides"];
showSlides(1,0);
showSlides(1,1);
showSlides(1,2);
showSlides(1,3);
showSlides(1,4);
showSlides(1,5);
showSlides(1,6);
showSlides(1,7);

// Next/previous controls
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

// ROOM TOGGLE CONTROL
toggleRoomDisplay(0);

function toggleRoomDisplay(n) {
    var standard = document.getElementById('standard-rooms');
    var junior = document.getElementById('junior-suites');
    var presidential = document.getElementById('presidential-suites');
    var roomLinks = document.getElementsByClassName('room-link');
    
    if (n===0) {
        junior.style.display = "none";
        roomLinks[1].classList.remove('clicked-color');
        
        presidential.style.display = "none";
        roomLinks[2].classList.remove('clicked-color');
        
        standard.style.display = "block";
        roomLinks[0].classList.add('clicked-color');
    } else if (n===1) {
        standard.style.display = "none";
        roomLinks[0].classList.remove('clicked-color');
        
        presidential.style.display = "none";
        roomLinks[2].classList.remove('clicked-color');
        
        junior.style.display = "block";
        roomLinks[1].classList.add('clicked-color');
    } else if (n===2) {
        standard.style.display = "none";
        roomLinks[0].classList.remove('clicked-color');
        
        junior.style.display = "none";
        roomLinks[1].classList.remove('clicked-color');
        
        presidential.style.display = "block";
        roomLinks[2].classList.add('clicked-color');
    }
}

toggleEventsDisplay(0);

function toggleEventsDisplay(n) {
    var business = document.getElementById('business');
    var privateDining = document.getElementById('private-dining');
    var weddings = document.getElementById('weddings');
    var eventLinks = document.getElementsByClassName('event-link');
    
    if (n===0) {
        privateDining.style.display = "none";
        eventLinks[1].classList.remove('clicked-color');
        
        weddings.style.display = "none";
        eventLinks[2].classList.remove('clicked-color');
        
        business.style.display = "block";
        eventLinks[0].classList.add('clicked-color');
    } else if (n===1) {
        business.style.display = "none";
        eventLinks[0].classList.remove('clicked-color');
        
        weddings.style.display = "none";
        eventLinks[2].classList.remove('clicked-color');
        
        privateDining.style.display = "block";
        eventLinks[1].classList.add('clicked-color');
    } else if (n===2) {
        business.style.display = "none";
        eventLinks[0].classList.remove('clicked-color');
        
        privateDining.style.display = "none";
        eventLinks[1].classList.remove('clicked-color');
        
        weddings.style.display = "block";
        eventLinks[2].classList.add('clicked-color');
    }
}