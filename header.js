

const main = document.querySelector(".main"), 
    header = document.querySelector(".header");

let headerHeightDefault = header.offsetHeight, 
    prevYScroll = window.pageYOffset;


function scrollHandler(event) {
    let yScroll = window.pageYOffset; // 브라우저 좌상단에서 스크롤된 픽셀
    if (yScroll > headerHeightDefault) {
        if (yScroll > prevYScroll) {
            header.classList.add("scrollHeader");
            header.style.top = headerHeightDefault * -2 + "px";
        } else {
            header.classList.remove("scrollHeader");
            header.style.top = "0";
        }
    } else {
        header.classList.remove("scrollHeader");
        header.style.top = "0";
    } 
    prevYScroll = yScroll;
}

function onScroll() {
    window.addEventListener("scroll", scrollHandler);
}

function setTopPadding() {
    main.style.paddingTop = headerHeightDefault + "px";
}

function resizeWindow() {
    window.addEventListener("resize", setTopPadding);
}

function init() {
    setTopPadding();
    resizeWindow();
    onScroll();
}

init();