// let input = document.getElementById('inputBox');
// let buttons = document.querySelectorAll('button');

// let string = "";
// let arr = Array.from(buttons);
// arr.forEach(button => {
//     button.addEventListener('click', (e) =>{
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             input.value = string;
//         }

//         else if(e.target.innerHTML == 'AC'){
//             string = "";
//             input.value = string;
//         }
//         else if(e.target.innerHTML == 'DEL'){
//             string = string.substring(0, string.length-1);
//             input.value = string;
//         }
//         else{
//             string += e.target.innerHTML;
//             input.value = string;
//         }
        
//     })
// })



let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

// Handle button clicks
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        } else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});

// Handle keyboard input
document.addEventListener('keydown', (event) => {
    if (!isNaN(event.key) || ["+", "-", "*", "/"].includes(event.key)) {
        // If the key is a number or an operator
        string += event.key;
        input.value = string;
    } else if (event.key === "Enter") {
        // If Enter is pressed, evaluate the expression
        try {
            string = eval(string);
            input.value = string;
        } catch {
            input.value = "Error";
            string = "";
        }
    } else if (event.key === "Backspace") {
        // If Backspace is pressed, delete the last character
        string = string.substring(0, string.length - 1);
        input.value = string;
    } else if (event.key === "Escape") {
        // If Escape is pressed, clear the input
        string = "";
        input.value = string;
    }
});
