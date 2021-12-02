const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	
	password: /^.{4,12}$/, // 4 a 12 digitos.
}

const campos = {
	usuario: false,
	pass: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
		
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
		break;
		
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){

		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');

		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');

        document.getElementById(`grupo__${campo}`).classList.remove('formulario__input');
    
		campos[campo] = true;

	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');

		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');

	


		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

