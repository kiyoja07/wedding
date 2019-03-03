
const Day = document.querySelector(".dDay");
const dDay = new Date("2019-06-15");
const now = new Date(); 

function displayResult(gapDay) {
    const reverseResult = Math.abs(gapDay);

    if (gapDay > 0) {
        Day.innerText = `D - ${reverseResult}`;
    } else if (gapDay < 0) {
        Day.innerText = `D + ${reverseResult}`;
    } else {
        Day.innerText = `D - Day`;
    }
}

function dayCalculator() {
    const gapTime = dDay.getTime() - now.getTime();
    const gapDay = Math.floor(gapTime / (1000 * 60 * 60 * 24)) + 1;
    console.log(gapDay)
    displayResult(gapDay);
}

function init() {
    dayCalculator();
}

init();