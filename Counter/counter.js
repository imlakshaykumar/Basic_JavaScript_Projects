let count = 0;

const increaseButton = document.querySelector("#increase");
const decreaseButton = document.querySelector("#decrease");
const resetButton = document.querySelector("#reset");
const countValue = document.querySelector("#count")

increaseButton.addEventListener('click', () => {
    countValue.textContent = [
        count = count + 1
    ]
    countValue.style.color = "green"
})
decreaseButton.addEventListener('click', () => {
    countValue.textContent = [
        count = count - 1
    ]
    if (count > 0) {
        countValue.style.color = "green"
    } else if (count === 0) {
        countValue.style.color = "black"
    }
    else {
        countValue.style.color = "red"
    }
})

resetButton.addEventListener('click', () => {
    countValue.textContent = count = 0;
    countValue.style.color = "black"

})
