let displayBox = document.querySelector(".display");

function showDisplay(event) {
    const x = event.target.innerText;
    if (displayBox.innerHTML == 0) {
        return displayBox.innerHTML = x;
    }
    return displayBox.innerHTML += x;
}

function calculate() {
    let result = displayBox.innerText;
    try {
        let evaluatedResult = eval(result);
        // Limit the result to 10 digits
        let formattedResult = parseFloat(evaluatedResult.toPrecision(10));
        displayBox.innerText = formattedResult;
    } catch (error) {
        displayBox.innerText = "error syntax";
        // Hide the error message after 2 seconds
        setTimeout(() => {
            displayBox.innerText = 0;
        }, 2000);
    }
}

function allClear() {
    displayBox.innerText = 0;
}

function clear() {
    let text = displayBox.innerText;
    if (text.length === 1) {
        displayBox.innerText = 0;
    } else { 
        displayBox.innerText = text.substring(0, text.length - 1)
    }
}

document.querySelector(".calculate").addEventListener("click", calculate);
document.querySelector(".all-clear").addEventListener("click", allClear);
document.querySelector(".clear-last").addEventListener("click", clear);
let list = document.querySelectorAll(".show-display");
list.forEach(item => {
    item.addEventListener("click", showDisplay)
})