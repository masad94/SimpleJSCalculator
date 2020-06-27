var result=0;
var input=document.getElementById("input");
var resultTextBox=document.getElementById("result")

function clearInput(){
    input.value="";    
}

function backSpace(){
    input.value=input.value.slice(0,input.value.length-1);
}

function getinput(val){
    input.value+=val;

}

function calculateResult(){
    result=eval(input.value);
    resultTextBox.value=result;
}

function oneDivideByX(){
    result=1/input.value;
    resultTextBox.value=result;
}

function squareRoot(){
    result=Math.sqrt(input.value);
    input.value="sqrt("+input.value+")";
    resultTextBox.value=result;
}

function square(){
    result=input.value**2;
    resultTextBox.value=result;
}
