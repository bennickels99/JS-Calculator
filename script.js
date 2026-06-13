// global variables to be used in each function
let arg1 = "0";
let arg2 = "0";
let operator;
let answer;

// booleans to know what state calculator is in
let start = true;
let middle = false;
let end = false;

document.addEventListener("DOMContentLoaded", function() {
    // number button variables
    const zero = document.getElementById("zero");
    const one = document.getElementById("one");
    const two = document.getElementById("two");
    const three = document.getElementById("three");
    const four = document.getElementById("four");
    const five = document.getElementById("five");
    const six = document.getElementById("six");
    const seven = document.getElementById("seven");
    const eight = document.getElementById("eight");
    const nine = document.getElementById("nine");

    // operator button variables
    const addition = document.getElementById("add");
    const subtraction = document.getElementById("subtract");
    const multiplication = document.getElementById("multiply");
    const division = document.getElementById("divide");

    const equals = document.getElementById("equal");

    // display variable
    const display = document.getElementById("display");

    // modifier buttons
    const percentage = document.getElementById("percent");
    const sign = document.getElementById("signSwap")
    const decimalNumber = document.getElementById("decimal");

    // clear buttons
    const allClear = document.getElementById("all clear");
    const deleted = document.getElementById("delete");

    zero.addEventListener("click", function() {getArg("0")});
    one.addEventListener("click", function() {getArg("1")});
    two.addEventListener("click", function() {getArg("2")});
    three.addEventListener("click", function() {getArg("3")});
    four.addEventListener("click", function() {getArg("4")});
    five.addEventListener("click", function() {getArg("5")});
    six.addEventListener("click", function() {getArg("6")});
    seven.addEventListener("click", function() {getArg("7")});
    eight.addEventListener("click", function() {getArg("8")});
    nine.addEventListener("click", function() {getArg("9")});

    addition.addEventListener("click", function() {performAdd(arg1)});
    subtraction.addEventListener("click", function() {performSubtract(arg1)});
    multiplication.addEventListener("click", function() {performMultiply(arg1)});
    division.addEventListener("click", function() {performDivide(arg1)});

    equals.addEventListener("click", function() {performEqual()});

    percentage.addEventListener("click", function() {turnPercent()});
    sign.addEventListener("click", function() {changeSigns()});
    decimalNumber.addEventListener("click", function() {addDecimal()});

    allClear.addEventListener("click", function() {clearAll()});
    deleted.addEventListener("click", function() {deleting()});


    function getArg(num){
        if(start){
            if(arg1 == "0"){
                arg1 = num;
                display.innerHTML = arg1;
            }
            else{
                arg1 = arg1 + num;
                display.innerHTML = arg1;
            }
        }
        else if(middle){
            if(arg2 == "0"){
                arg2 = num;
                display.innerHTML = display.innerHTML + arg2;
            }
            else{
                arg2 = arg2 + num;
                display.innerHTML = display.innerHTML + num;
            }
        }
    }

    function turnPercent(){
        if(start){
            arg1 = Number(arg1) / 100;
            String(arg1);
            display.innerHTML = arg1;
        }else if(middle){
            arg2 = Number(arg2) / 100;
            String(arg2);
            display.innerHTML = arg1 + operator + arg2;
        }else if(end){
            answer = Number(answer) / 100;
            String(answer);
            display.innerHTML = answer;
        }
    }

    function changeSigns(){
        if(start){
            arg1 = Number(arg1) * -1;
            String(arg1);
            display.innerHTML = arg1;
        }else if(middle){
            arg2 = Number(arg2) * -1;
            String(arg2);
            display.innerHTML = arg1 + operator + arg2;
        }else if(end){
            answer = Number(answer) * -1;
            String(answer);
            display.innerHTML = answer;
        }
    }

    function addDecimal(){
        if(start){
            arg1 = arg1 + ".";
            display.innerHTML = arg1;
        }else if(middle){
            arg2 = arg2 + ".";
            display.innerHTML = arg1 + operator + arg2;
        }else if(end){
            answer = answer + ".";
            display.innerHTML = answer;
        }
    }

    function performAdd(){
        start = false;
        middle = true;
        operator = "+";
        display.innerHTML = display.innerHTML + operator;
    }

    function performSubtract(){
        start = false;
        middle = true;
        operator = "-";
        display.innerHTML = display.innerHTML + operator;
    }

    function performMultiply(){
        start = false;
        middle = true;
        operator = "&times";
        display.innerHTML = display.innerHTML + operator;
    }

    function performDivide(){
        start = false;
        middle = true;
        operator = "&divide";
        display.innerHTML = display.innerHTML + operator;
    }

    function performEqual(){
        if(operator == "+"){
            answer = Number(arg1) + Number(arg2);
        }else if (operator == "-"){
            answer = Number(arg1) - Number(arg2);
        }else if (operator == "&times"){
            answer = Number(arg1) * Number(arg2);
        }else if (operator == "&divide"){
            answer = Number(arg1) / Number(arg2);
        }else{
            answer = "ERROR";
        }

        middle = false;
        end = true;
        answer = answer.toPrecision(8);
        display.innerHTML = String(answer);
    }

    function clearAll(){
        arg1 = "0";
        arg2 = "0";
        operator = null;
        answer = null;

        start = true;
        middle = false;
        end = false;

        display.innerHTML = arg1;
    }

    function deleting(){
        if(start){
            arg1 = arg1.slice(0, -1);
            display.innerHTML = arg1;
        }else if(middle){
            arg2 = arg2.slice(0, -1);
            display.innerHTML = arg1 + operator + arg2;
        }
    }
})
