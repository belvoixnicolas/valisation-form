function validateEmail($email){
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	if(!emailReg.test($email)){
		return false;
	}
	else{
		return true;
	}
}

function checkForm() {
  var input = document.querySelectorAll('input[type=text]');
  var mail = document.querySelectorAll('input[type=email]');

  ////// VERIF TOUT LES INPUT TEXT \\\\\\
  for (var i = 0; i < input.length; i++) {
    if ($(input[i]).val() == "") {
      $(input[i]).addClass('error');
    }else {
      $(input[i]).removeClass('error');
    }
  }

  ////// VERIF TOUT LES INPUT EMAIL \\\\\\
  for (var i = 0; i < mail.length; i++) {
    var verif = validateEmail($(mail[i]).val());

    if (verif == false || $(mail[i]).val() == "") {
      $(mail[i]).addClass('error');
    }else {
      $(mail[i]).removeClass('error');
    }
  }

  ////// VERIF SELECT \\\\\\
  if ($('select').val() == 'Choose') {
    $('select').addClass('error');
  }else {
    $('select').removeClass('error');
  }
}
