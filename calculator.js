const displayValue = document.querySelector(".display-value")
const keyboard = document.querySelector(".keys-container")

const keys = ["+", "-", "×", "÷", "7", "8", "9", "=", "4", "5", "6", "1", "2", "3", "0", ".", "AC"]
let inputString = []
let inputInt = []
let counter = 0
let displayNumber = 0

const addNumber = (key) => {

}

// const storeValue = (arr) => {
//     let num = +arr.join("")
//     console.log(num);
//     inputString = [];
//     inputInt.push(num);
//     console.log(inputInt);
//     counter++
// }

const handleClick = (key) => {
    console.log("clicked", key)
    if (key === "+") {
        addition()
        return
    }
    if (key === "-") {
        subtraction()
        return
    }
    if (key === "") {
        multiplication()
        return
    }
    if (key === "") {
        division()
        return
    }
    if (key === "=") {
        calculate()
        return
    }
    if (key === ".") {
        decimalPoint()
        return
    }
    if (key === "AC") {
        allClear()
        return
    } 
    addNumber(key)
}

const addition = () => {
    storeValue(inputString)
}

const subtraction = () => {

}

const multiplication = () => {

}

const division = () => {

}

const calculate = () => {

}

const decimalPoint = () => {

}

const allClear = () => {

}

// render keypad
keys.forEach(key => {
    const buttonElement = document.createElement("button")
    buttonElement.textContent = key
    buttonElement.setAttribute("id", "key-" + key)
    buttonElement.addEventListener("click", () => handleClick(key))
    keyboard.append(buttonElement)
})