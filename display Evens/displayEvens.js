function displayEvens() {
    var num1 = Number(document.getElementById("startNum").value);
    var num2 = Number(document.getElementById("endNum").value);
    var step = Number(document.getElementById("step").value);

var allResult = "";

if(step>num2 || step<0)
{
    alert("Please change your increment");
    return;
}

if(num2<=num1)
{
    alert("Please make sure ending number is > starting number");
    return;
}
if(num1%2!==0 && step ===2){
    alert("odd numbers don't output even number so change the number:) ")
}

for (var counter = num1; counter <= num2; counter += step) {
    if( counter % 2 == 0){
        allResult = allResult + counter + "<br>" ; 
    
    }
 
}
document.getElementById("answer").innerHTML = allResult;
document.getElementById("showResult").style.display = "block";
document.getElementById("showResult").style.display = "block";
}