var enrolar = function () {
	var nombre = document.getElementById('namefield');
	var tel = document.getElementById('telfield');
	var email = document.getElementById('emailfield');
	var metodo = document.getElementById('metodofield');
	var tabla = document.getElementById('tabladatos');

	if (nombre.value != '' && tel.value != '' && email.value != '') {
		row = document.createElement('tr');
		data = document.createElement('td');
		data.innerText = nombre.value;

		row.appendChild(data);

		data = document.createElement('td');
		data.innerText = tel.value;
		row.appendChild(data);

		data = document.createElement('td');
		data.innerText = email.value;
		row.appendChild(data);

		data = document.createElement('td');
		data.innerText = metodo.value;
		row.appendChild(data);

		tabla.appendChild(row);

		data = document.createElement('td');
		btn = document.createElement('button');
		btn.setAttribute('class', 'btn btn-danger fas fa-trash-alt');
		btn.setAttribute('onclick', 'remove(this)');
		data.appendChild(btn);
		row.appendChild(data);

		tabla.appendChild(row);

		saveData(nombre.value, tel.value, email.value, metodo.value);

		clearForm();
		document.getElementById('contador').innerText = tabla.rows.length - 1;
	}
};

var remove = function (btn) {
	row = btn.parentNode.parentNode;
	var tabla = document.getElementById('tabladatos');
	if (confirm('Usted esta seguro de borrar este registro?')) {
		row.parentNode.removeChild(row);
		document.getElementById('contador').innerText = tabla.rows.length - 1;
	}
};

var clearForm = function () {
	var nombre = document.getElementById('namefield');
	var tel = document.getElementById('telfield');
	var email = document.getElementById('emailfield');
	nombre.value = '';
	tel.value = '';
	email.value = '';
};

var saveData = function (name, tel, email, method) {
	var tabla = document.getElementById('tabladatos');
	var arrayData = [],
		datos,
		guardado = localStorage.getItem('dataRow');

	guardado = JSON.parse(guardado);
	datos = guardado[0];
	console.log(datos);

	for (var x = 0; x < tabla.rows.length - 2; x++) {
		arrayData[x] = datos[x];
	}
	datos = { nombre: name, telefono: tel, email: email, metodo: method };
	arrayData[tabla.rows.length - 1] = datos;
	localStorage.setItem('dataRow', JSON.stringify(arrayData));
};

var charge = function () {
	var tabla = document.getElementById('tabladatos');
	console.log(localStorage.getItem('dataRow'));
};
