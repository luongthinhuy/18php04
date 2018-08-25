$(function(){
		$('#menu').slicknav();
	});
$(document).ready(function(){
	$('.bxslider').bxSlider({
		mode: 'horizontal',
		moveSlides: 1,
		slideMargin: 40,
		infiniteLoop: true,
		minSlides: 3,
		maxSlides: 3,
		speed: 3000,
		duration : 4000,
	});
	setTimeout(showSlides, 5000);
});
window.setInterval(function(){
	$('#navButton').click(2500);
});
var slideIndex;
    function showSlides() {
      //tự động chuyển đổi slide sau 5s
        setTimeout(showSlides, 5000);
} 
    function currentSlide(n) {
        showSlides(slideIndex = n);
}
function validateRegister(){
	var name, phone, male, female, other, check, come, leave;
	name   = document.getElementById('name').value;
	phone  = document.getElementById('phone').value;
	come = document.getElementById('come').value;
	leave = document.getElementById('leave').value;
	male   = document.getElementById('male').checked;
	female = document.getElementById('female').checked;
	other  = document.getElementById('other').checked;
	check = true;
	if(name == ''){
		document.getElementById('error_name').innerHTML = 'Please input your name!';
		check = false;
	}else{
		document.getElementById('error_name').innerHTML = '';
	}
	if(phone == ''){
		document.getElementById('error_phone').innerHTML = 'Please input your phone!';
		check = false;
	}else{
		document.getElementById('error_phone').innerHTML = '';
	}
	// if(male == false && female == false && other == false){
	if(!male && !female && !other){
		document.getElementById('error_gender').innerHTML = 'Please choose your gender!';
		check = false;
	}else{
		document.getElementById('error_gender').innerHTML = '';
	}
	if(check){
		document.getElementById('registerForm').style.display = 'none';
		document.getElementById('success').style.display = 'block';
	}
}
// Getter
var defaultDate = $( "#come" ).datepicker( "option", "defaultDate" );
 
// Setter
$( "#come" ).datepicker( "option", "defaultDate", +7 );
