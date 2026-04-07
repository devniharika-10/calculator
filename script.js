let display = document.getElementById("display");

function appendValue(value){
display.value += value;
}

function clearDisplay(){
display.value = "";
}

function deleteLast(){
display.value = display.value.slice(0,-1);
}

function calculate(){

try{

display.value = eval(display.value);

}

catch{

display.value = "Error";

}

}

/* Square */

function square(){

let value = parseFloat(display.value);

display.value = value * value;

}

/* Square Root */

function squareRoot(){

let value = parseFloat(display.value);

display.value = Math.sqrt(value);

}

/* Keyboard Support */

document.addEventListener("keydown",function(event){

let key = event.key;

if(!isNaN(key) || "+-*/.%".includes(key)){
appendValue(key);
}

else if(key === "Enter"){
calculate();
}

else if(key === "Backspace"){
deleteLast();
}

else if(key === "Escape"){
clearDisplay();
}

});