

/*var userName = prompt('Логин');

if (userName =='Админ') {
	var pass = prompt('Пароль', '');
} else {
	(pass == null);
}	
	alert( 'Где пароль?' );*/


var userName = prompt('Логин', '');

if (userName =='Админ') {

	var pass = prompt('Пароль', '');

	if (pass == 'Черный властелин') {
		alert( 'Добро пожаловать' );
	}	else if (pass == null) {
		alert( 'Вход отменен' );
	}	else {
		alert( 'Пароль не верен' );
    }

} else if (userName == null) { 
  alert( 'Вход отменен' );
} else {
  alert( 'Я вас не знаю' );
}    