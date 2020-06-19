var saludar = function () {
	var nombre = document.getElementById('nombre').value;
	var res = document.getElementById('saludo');

	res.innerHTML =
		'Saludos ' +
		nombre +
		', espero que tenga un buen día. Este es un ejemplo de que es "JavaScript no obstructivo", ' +
		'el cual estamos separando las funcionalidades de javascript y el código del html';
};
