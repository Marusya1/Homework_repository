//1
function pow() {
	var a = prompt('Введите зачение');
	var b = prompt('Введите степень');

	var result = a;
	for (var i = 0; i < b; i++) {
	  result = Math.pow(a,b);
	}
	return result;
}
 alert(pow());
//2 

function enterYourName(){
	var names = [];
	for (var i = 1; i < 6; i++) {
		var name = prompt('Введите имя ');
		names.push(name);
	}
	var log = prompt('Введите свое имя');
	for (var i = 0; i < names.length; i++){
		if ( log == names[i] ) {
			alert('Hello ' + names[i]);
			return;
		}
		else if ( log != names[i] && i != names.length-1){
	   		continue;
		}
		else {
			alert('ERROR');
			return;
		}
	} 
}
enterYourName();