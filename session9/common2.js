/*
function Yne(){
	document.getElementById('Yne').src = 'avt.jpeg';}
function doremon(){	
	document.getElementById('Yne').src = 'drm.png';}
function bia(){	
	document.getElementById('Yne').src = 'bia.jpg';}
function nobita(){	
	document.getElementById('Yne').src = 'nbt.png';}
*/
// cach khac
function Yne(image, name, color) {
	document.getElementById('Yne').src = image;
	document.getElementById('demo').innerHTML = name;
	document.getElementById('demo').style.color = color;
}

