//$('a').click(function(){ 
	//$('#demo1').hide(3000);
//});
//$('#demo2').click(function(){ 
//	$('.demo1').show(1500);
//});
//$('.change1').click(function(){ 
//	$('.demo1').text('abcc');
//});
//
$('#change .change1').click(function(){
	$('.demo1').text('Hello World');
});
$('.change2').click(function(){
	if ($('.change2').text() == 'turn on') {
		$('img').attr('src', 'img/pic_bulbon.gif');
		$('.change2').text('turn off');}
	else{
		$('img').attr('src', 'img/pic_bulboff.gif');
		$('.change2').text('turn on');
	} 
});
$('.change4').click(function(){
	$('#demo3').css('color','red');
});
$('.change5').click(function(){
	$('#demo3').addClass('content');
});
$('.change6').click(function(){
	$('#demo3').removeClass('content');
});
$('#testform').click(function(){
	var name = $('#name').val();
	var fb = $('#fb').val();
	linkFB = $ ()
});