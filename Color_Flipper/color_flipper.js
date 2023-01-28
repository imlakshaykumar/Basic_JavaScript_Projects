let previousNum;

const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

const changeButton = document.querySelector('#change-btn');
const colorName = document.querySelector('#color-name');
const hexOf3 = document.querySelector("#hexOf_three");
const hexOf6 = document.querySelector("#hexOf_six");

function randomNumber() {
    let random = Math.floor(Math.random() * hex.length);
    if (random === previousNum) {
        return randomNumber();
    } else {
        return random;
    }
    // return Math.floor(Math.random() * colors.length);
}

function hexColorOf_3() {
    let randomNum = randomNumber();
    let hexName = ['#'];
    for (let i = 0; i < 3; i++) {
        let newColor = [
            hexName.push = hex[randomNumber()]
        ];
        hexName += newColor;
    }
    colorName.textContent = hexName;
    document.body.style.backgroundColor = hexName;
    previousNum = randomNum;
}

function hexColorOf_6() {
    let randomNum = randomNumber();
    let hexName = ['#'];
    for (let i = 0; i < 6; i++) {
        let newColor = [
            hexName.push = hex[randomNumber()]
        ];
        hexName += newColor;
    }
    colorName.textContent = hexName;
    document.body.style.backgroundColor = hexName;
    previousNum = randomNum;
}

changeButton.addEventListener('click', () => {
    let randomNum = randomNumber();
    let hexName = ['#'];
    for (let i = 0; i < 6; i++) {
        let newColor = [
            hexName.push = hex[randomNumber()]
        ];
        hexName += newColor;
    }
    colorName.textContent = hexName;
    document.body.style.backgroundColor = hexName;
    previousNum = randomNum;
})

hexOf3.addEventListener('click', hexColorOf_3)
hexOf6.addEventListener('click', hexColorOf_6)
// changeButton.addEventListener('click', hexColorOf_6)
