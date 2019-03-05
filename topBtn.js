const topBtn = document.querySelector('.topBtn');
let prevYAxis = window.pageYOffset;  // 브라우저 좌상단에서 스크롤된 픽셀

function scrollHandler(event) {
  let yScroll = window.pageYOffset;

  if (yScroll >= prevYAxis) {
    topBtn.classList.remove('topBtnBlock');
    topBtn.classList.add('topBtnNone');
  } else {
    topBtn.classList.remove('topBtnNone');
    topBtn.classList.add('topBtnBlock');
    onClick();
  }
  prevYAxis = yScroll;
}

function goToTop(event) {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function onClick() {
  topBtn.addEventListener('click', goToTop);
}

function onScroll() {
  window.addEventListener('scroll', scrollHandler);
}

function init() {
  onScroll();
}

init();