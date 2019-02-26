
const slideshow = document.querySelector(".slideBody"),
  slide = slideshow.querySelectorAll(".slide"),
  dots = slideshow.querySelectorAll(".dot");

let slideIndex = 0,
  interval = null,
  x0 = null;

function handleBtn(input) {
  slideIndex = slideIndex + input;
  showSlide(slideIndex);
}

function handleDot(input) {
  showSlide(input);
}

function checkNum (inNum) {
  if (inNum >= slide.length) {
      inNum = 0;
  } else if (inNum < 0) {
      inNum = slide.length - 1;
  }
  return inNum;
}


function showSlide(index) {
  clearTimeout(interval);
  slideIndex = checkNum(index);
  var i;
  for (i = 0; i < slide.length; i++) {
      slide[i].style.display = "none";
  }
  slide[slideIndex].style.display = "block";

  for (i = 0; i < slide.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex].className += " active";
  interval = setTimeout(auto, 3000);
}

function auto() {
  handleBtn(1);
}


function unify(e) {
  return e.changedTouches ? e.changedTouches[0] : e
}

function lock(e) {
  x0 = unify(e).clientX;
}

function move(e) {
  let dx = unify(e).clientX - x0;
  if ((x0 || x0 === 0) && Math.abs(dx) > 20) {
  
    let s = Math.sign(dx); // 부호를 반환 1, -1, 0, -0, NaN

    if (s > 0) {
      if (slideIndex == 0 ) {
        slideIndex = slide.length - 1;
      } else {
        slideIndex -= s;
      }
    } else if (s < 0) {
      if(slideIndex < slide.length) {
        slideIndex -= s;
      } else {
        slideIndex = 0;
      }     
    } 
    showSlide(slideIndex);
    x0 = null;
  }
}

function swiper() {
// slideshow.addEventListener('touchmove', e => {e.preventDefault()});
slideshow.addEventListener('mousedown', lock);
slideshow.addEventListener('touchstart', lock);
slideshow.addEventListener('mouseup', move);
slideshow.addEventListener('touchend', move);
}

function init() {
  showSlide(slideIndex);
  swiper();
}

init();