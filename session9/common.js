var myName = 'Y';
var a = 10;
// dinh nghia ham
function functionName(){
	document.write('Hello function');
}
// goi ham
functionName();
document.write('<br>');
//
function sumNumber(a = 4, b = 5){
	document.write(a + b);
}
sumNumber(2, 3);
document.write('<br>');
sumNumber();
///
/*
description: ham nay de tinh tong 2 so
created 18:39 04/08/2018
created by Y
*/
function sumNumber2(a = 4, b = 5){
	return a + b;
}
document.write('<br>');
document.write(sumNumber2(2, 3));
document.write('<br>');
console.log(a);
if(sumNumber2(2, 3) > 4){
	document.write('Tong lon hon 4');
}
document.write('<br>');
//
var b = 5;
if (b > 5) {
	document.write('b lon hon 5');
} else{
	document.write('b nho hon hoac bang 5');
}
// 
document.write('<br>');
var b = 5;
var c;
c = (b > 5) ? 'b lon hon 5' : 'b nho hon hoac bang 5';
document.write(c);
//(condition)? true : false;
document.write('<br>');
for (var i = 0; i < 3; i++){
	document.write(i);
	document.write('<br>');
}
var j = 3;
var c;
c = --j + 5;
document.write(c);
//
document.write('<br>');
var k = 3;
var d;
d = k++ + 5;
document.write(d);
document.write('<br>');
