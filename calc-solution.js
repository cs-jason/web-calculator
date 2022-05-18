const displayValue = document.querySelector(".display-value")
const keyboard = document.querySelector(".keys-container")

const keys = ["+", "-", "×", "÷", "7", "8", "9", "=", "4", "5", "6", "1", "2", "3", "0", ".", "AC"]


// render keypad
keys.forEach(key => {
    const buttonElement = document.createElement("button")
    buttonElement.textContent = key
    buttonElement.setAttribute("id", "key-" + key)
    buttonElement.addEventListener("click", () => handleClick(key))
    keyboard.append(buttonElement)
})