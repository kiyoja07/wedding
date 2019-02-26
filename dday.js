
const Day = document.querySelector(".dDay");
const dDay = new Date("2019-06-15");
const now = new Date(); 

function displayResult(gapDay) {
    const reverseResult = gapDay * -1;
    Day.innerText = `D${reverseResult}`;
}

function dayCalculator() {
    const gapTime = dDay.getTime() - now.getTime();
    const gapDay = Math.floor(gapTime / (1000 * 60 * 60 * 24));
    displayResult(gapDay);
}

function init() {
    dayCalculator();
}

init();