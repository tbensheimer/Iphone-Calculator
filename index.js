const output = document.querySelector(".display");
const number = document.querySelectorAll(".number");
const operatorbtns = document.querySelectorAll(".operator");
const specialbtns = document.querySelectorAll(".special");
const reset = document.querySelector(".reset");


let firstNumber = 0;
let operator = null;
let resetAfterOperator = false;



number.forEach(button => {

button.addEventListener("click", event => {
    let value = event.currentTarget.textContent;
if (resetAfterOperator) {
    operatorbtns.forEach(button => {
        button.classList.remove("depressed")
    })
     output.textContent = value;
     resetAfterOperator = false;
} else if (output.textContent === "0") {
     output.textContent = value;
     reset.textContent = "C";
} else if (output.textContent.length >= 9) {
    output.textContent.substring(0, 10)
}

else {
   return output.textContent += value;
}
})
})

operatorbtns.forEach(button => {

    button.addEventListener("click", event => {
if (output.textContent == 0) {
    return
} else if (resetAfterOperator) {
   return

// complicated situation here
}
    firstNumber = Number.parseFloat(output.textContent, 10);
    operator = event.currentTarget.dataset.action;
    resetAfterOperator = true;
    event.currentTarget.classList.add("depressed");
})
    })



    specialbtns.forEach(button => {
        button.addEventListener("click", event => {
    let styles = event.currentTarget.classList;
    
    if (styles.contains("reset")) {
        output.textContent = 0;
        operator = null;
        resetAfterOperator = false;
        reset.textContent = "AC"
        operatorbtns.forEach(button => {
            button.classList.remove("depressed");
        })
    }
    if (styles.contains("invert")) {
        output.textContent *= -1;
    }
    if (styles.contains("percent")) {
        output.textContent /= 100;
    }
    
        })
    })
    
    const decimal = document.querySelector(".decimal");
    
    decimal.addEventListener("click", event => {
    if (output.textContent.includes(".")) {
        return
    } else {
        output.textContent += event.currentTarget.textContent;
    }
    
    })


    

    const equal = document.querySelector(".equal");
    equal.addEventListener("click", event => {
        if (!operator) {
            return
        } 

resetAfterOperator = true;
let secondNumber = Number.parseFloat(output.textContent, 10);


if (operator === "add") {
    output.textContent = sum(firstNumber, secondNumber)
}
else if (operator === "subtract") {
    output.textContent = subtract(firstNumber, secondNumber)
}
else if (operator === "multiply") {
    output.textContent = multiply(firstNumber, secondNumber)
}
else if (operator === "divide") {
    if (secondNumber === 0) {
       return output.textContent = "Error"
    }
     output.textContent = divide(firstNumber, secondNumber)
   
    }
      
operator = null;
})

function sum(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

