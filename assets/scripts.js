/** Var and const*/
let result = 0
let memory = ''
let math = ''
let previousMath = '' // This Var to memorize previous operator when an operator button is click
let preventFirst = true // This Var is to prevent to do any operation on first data capture

/** recover display */
const displayField = document.querySelector('.number')

/** recover buttons */
const buttonEqual = document.querySelector('.button__validate')
const buttonClear = document.querySelector('.button__special')
const buttonOperand = document.querySelectorAll('.button__math')
const buttonNumber = document.querySelectorAll('.button__number')

/** Functions */
/** Create number */
buttonNumber.forEach((button) => {
    button.addEventListener('click', function () {
        memory = memory + button.innerText
        displayField.innerText = Number(memory)
    })
})

/** Maths functions */
/** Recover math operand */
buttonOperand.forEach((button) => {
    button.addEventListener('click', function () {
        previousMath = math
        math = button.innerText
        /** Case of math to determine function to use */
        switch (previousMath) {
            case '':
                addNumber()
                break
            case '+':
                addNumber()
                break
            case '-':
                subNumber()
                break
            case 'x':
                multNumber()
                break
            case '/':
                divNumber()
                break
            default:
            // code block
        }
    })
})

/** Display memory and clear */
function displayMemory() {
    displayField.innerText = Math.round(Number(result) * 1000) / 1000
    memory = ''
}

/** Add function */
function addNumber() {
    result = result + Math.round(Number(memory) * 1000) / 1000
    preventFirst = false
    displayMemory()
}

/** Substract function */
function subNumber() {
    if (preventFirst === true) {
        result = Math.round(Number(memory) * 1000) / 1000
        preventFirst = false
    } else {
        result = result - Math.round(Number(memory) * 1000) / 1000
    }
    displayMemory()
}

/** Multiply function */
function multNumber() {
    if (preventFirst === true) {
        result = Math.round(Number(memory) * 1000) / 1000
        preventFirst = false
    } else {
        result = (result * Math.round(Number(memory) * 1000)) / 1000
    }
    displayMemory()
}

/** Divise function */
function divNumber() {
    if (preventFirst === true) {
        result = Math.round(Number(memory) * 1000) / 1000
        preventFirst = false
        displayMemory()
    } else {
        if (memory == 0) {
            displayField.innerText = 'ERR DIV 0'
        } else {
            result = result / Number(memory)
            displayMemory()
        }
    }
}

/** Clear function */
buttonClear.addEventListener('click', function () {
    result = 0
    memory = ''
    math = ''
    displayField.innerText = '0'
    preventFirst = true
})

/** Validate function */
buttonEqual.addEventListener('click', function () {
    switch (math) {
        case '':
            addNumber()
            break
        case '+':
            addNumber()
            break
        case '-':
            subNumber()
            break
        case 'x':
            multNumber()
            break
        case '/':
            divNumber()
            break
        default:
            displayField.innerText = 'ERR'
    }
    math = ''
})
