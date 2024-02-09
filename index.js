// CALCULATOR

const display = document.getElementById("display");

function appendToDisplay(Input){
    display.value += input;
}

function clearDisplay(){
}


function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}    
