function calculate( )
{
var a,b,Addition,Subtract;
a = parseInt(document.getElementById ("first").value);
b = parseInt(document.getElementById ("second").value);
Addition = a+b; 
Subtract = a-b; 

document.getElementById ("add") .innerHTML ="Addition : "+Addition;
document.getElementById ("sub").innerHTML ="Subtraction : "+Subtract;
}
