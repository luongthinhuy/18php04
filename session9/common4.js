// compress js
function validateForm() {
	var user  = document.getElementById('user').value;
	var phone  = document.getElementById('phone').value;
	var email  = document.getElementById('email').value;
	var birthday  = document.getElementById('birthday').value;
	var male  = document.getElementById('male').checked;
	var female  = document.getElementById('female').checked;
	var tieude = document.getElementById('tieude').value;
	var noidung  = document.getElementById('noidung').value;
	var check;
	check = true;
	if (user == "") {
		document.getElementById('t_user').innerHTML = 'Vui long nhap ten';
		document.getElementById('t_user').style.color = 'red';
		check = false;
	} else{
		document.getElementById('t_user').innerHTML = '';
	}
	if (phone == "") {
		document.getElementById('t_phone').innerHTML = 'vui long nhap phone';
		document.getElementById('t_phone').style.color = 'red';
		check = false;
	} else{
		document.getElementById('t_phone').innerHTML = '';
	}
	if (email == ""){
		document.getElementById('t_email').innerHTML = 'vui long nhap email';
		document.getElementById('t_email').style.color = 'red';
		check = false;
	} else{
		document.getElementById('t_email').innerHTML = '';
	}
	if (birthday == "") {
		document.getElementById('t_birthday').innerHTML= 'vui long nhap ngay sinh';
		document.getElementById('t_birthday').style.color = 'red';
		check = false;
	} else{
		document.getElementById('t_birthday').innerHTML = '';
	}
	if (male == false && female == false ) {
		document.getElementById('t_Gender').innerHTML = 'vui long nhap chon gioi tinh';
		document.getElementById('t_Gender').style.color = 'red';
		check = false;
	} else{
		document.getElementById('t_Gender').innerHTML = '';
	}
	if (tieude == "") {
		document.getElementById('t_tieude').innerHTML = 'vui long nhap tieu de';
		document.getElementById('t_tieude').style.color = 'red';
		check = false;
	} else{
		document.getElementById('t_tieude').innerHTML = '';
	}
	if (noidung == "") {
		document.getElementById('t_noidung').innerHTML = 'vui long nhap noi dung';
		document.getElementById('t_noidung').style.color = 'red';
		check = false;
	} else{
		document.getElementById('t_noidung').innerHTML = '';
	}
	if (check == true) {
		document.write('Ban da dang ky thanh cong !!!');
		document.getElementById('bao').style.display = "none";
	}
}


