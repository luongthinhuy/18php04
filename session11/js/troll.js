$('#no').mouseover(function(){      
	if($('#no').val() == 'Không'){
		$('#no').val('Có');
		$('#yes').val('Không');
	}
});
$('#yes').mouseover(function(){      
		$('#yes').val('Có');
		$('#no').val('Không');
});
$('#yes').click(function(){
	$('.demo').text('Dĩ nhiên rồi...Anh yêu em Ý à hihi');
});
$('#no').click(function(){
	$('.demo').text('Dù sao đi nữa...Anh vẫn yêu em mà Ý haha');
});