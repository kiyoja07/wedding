const mainBg = document.querySelector('.mainContainer');
const img_list = ['baseball.jpg', 'hanbok.jpg'];

function paintImage(img_number) {
    const image = new Image(); // returns the value of the src attribute of an image.
    const img_in = img_list[img_number];
    image.src = `image/${img_in}`;
    image.classList.add('bgImage');
    mainBg.prepend(image);
}

function getRandom() {
    const random_num = Math.round(Math.random() * (img_list.length - 1));
    return random_num;
}

function init() {
    const random_result = getRandom();
    paintImage(random_result);
}

init();
