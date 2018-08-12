var a;
var b = 5;
var c, d, e;
var f = "Hello";
document.write("<br>");
document.write(typeof a);
document.write("<br>");
var userName; //camel dùng
var user_name; //k nen dung
var myUserName = 'Y';
var a = "Y"; // camel dùng
var myPhone = '09123445'; //var b = '018983';
// var my Phone; ---- saiiiii -> var my_phone;
var soDienThoai; //k dung tieng viet
var my_user_name; // k nên dung
var name;
var age;
var birthday;
var country;
// comment inline
/* comment dài ơ đây
	tiep tuc commnent ở đây nè
*/
document.getElementById('demo1').innerHTML = 'Hello Javascript 3';
var a = 2;
var b = 3;
document.write(' Tong cua a + b la: ');
document.write(a + b);
document.write("<br>");
document.write(' Hieu cua a - b la: ');
document.write(a - b);
document.write("<br>");
document.write(' Tich cua a * b la: ');
document.write(a * b);
document.write("<br>");
document.write(' Thuong cua a % b la: ');
document.write(a % b);
document.write("<br>");
document.write(' Thuong cua a / b la: ');
document.write(a / b);
// if 
	// true - code
//else if
	// true - code
//else
	// false - code
document.write("<br>")
var year = 1997;
if (year % 2){
	document.write('ban sinh nam le');
}
else{
	document.write('ban sinh nam chan');
}
/* 
	if (year % 2 ==0){
	document.write('ban sinh nam chan');
}
else{
	document.write('ban sinh nam le');
}
*/
// != khac
// == so sanh bang
// === so sanh bang ca gia tri va kieu du lieu
// !== so sanh khac gia tri va kieu du lieu
// = gan
document.write("<br>");
for(i=0; i<=10; i++){
	document.write(i);
	document.write("<br>");
}
document.write("<br>");
for(i=0; i<=100; i++){
	
	if (i % 15 == 0) {
		document.write( i+ "chia het cho 15");
		document.write("<br>");
	}
		else 
			if(i % 3 ==  0){
				document.write(i+ "chia het cho 3");
				document.write("<br>");
			}
			if(i % 5 == 0){
				document.write(i+ "chia het cho 5");
				document.write("<br>");
			}
}
// while (condition){
	//true - code
//}
//do{
	//true - code
// while(condition)
var i = 10;
while (i>0){
	document.write(i);
	document.write("<br>");
	i--;
}
var i = 10;
do {
	document.write(i);
	document.write("<br>");
	i--;
}while (i>0);
// switch ... case
var today = 8;
switch (today){
	case 2:
		document.write('Monday');
		break;
	case 3:
		document.write('Tuesday');
		break;
	case 4:
		document.write('Wednesday');
		break;
	case 5:
		document.write('Thusday');
		break;
	case 6:
		document.write('Friday');
		break;
	case 7:
		document.write('Saturday');
		break;
	default:
		document.write('Sunday');
		break;
}