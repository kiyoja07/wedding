const Day = document.querySelector('.dDay');
const dDay = new Date('2019-06-15T24:00:00+09:00');
const now = new Date(); 

function displayResult(gapDay) {
    const reverseResult = Math.abs(gapDay);

    if (gapDay >= 1) {
        Day.innerText = `D - ${reverseResult}`;
    } else if (gapDay <= -1) {
        Day.innerText = `D + ${reverseResult}`;
    } else {
        Day.innerText = `D - Day`;
    }
}

function dayCalculator() {
    const gapTime = dDay.getTime() - now.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const gapDay = Math.floor(gapTime /oneDay) ;
    displayResult(gapDay);
}

function init() {
    dayCalculator();
}

init();