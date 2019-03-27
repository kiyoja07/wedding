const main = document.querySelector('.main');
const header = document.querySelector('.header');
const logo = header.querySelector('.headerLogo');
let headerHeightDefault = header.offsetHeight;
let prevYScroll = window.pageYOffset;

function scrollHandler(event) {
    let yScroll = window.pageYOffset; // 브라우저 좌상단에서 스크롤된 픽셀

    if (yScroll > headerHeightDefault) {
        if (yScroll > prevYScroll) {
            header.classList.add('scrollHeader');
            header.style.top = headerHeightDefault * -2 + 'px';
        } else {
            header.classList.remove('scrollHeader');
            header.style.top = '0';
        }
    } else {
        header.classList.remove('scrollHeader');
        header.style.top = '0';
    } 
    prevYScroll = yScroll;
}

function onScroll() {
    window.addEventListener('scroll', scrollHandler);
}

function setTopPadding() {
    main.style.paddingTop = headerHeightDefault + 'px';
}

function resizeWindow() {
    window.addEventListener('resize', setTopPadding);
}


function scrollToTop(event) {
    // returns the number of pixels an element's content is scrolled vertically
    // document.body.scrollTop : For Safari
    // document.documentElement.scrollTop : For Chrome, Firefox, IE and Opera
    
    const c = document.documentElement.scrollTop || document.body.scrollTop;
  
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 10);
    }
  }


function onClick() {
    logo.addEventListener('click', scrollToTop);
}

function init() {
    setTopPadding();
    resizeWindow();
    onScroll();
    onClick();
}

init();