var formulario=document.getElementById("idFormulario");

window.onload = iniciar;

function iniciar(){
	document.getElementById("enviar").addEventListener('click',validar,false);
}

function validaNombre(){
	var ret=false;
	var elemento=document.getElementById("idNombre");
	if(elemento.value==""){
		alert("El nombre no puede ser vacío");
	} else {
		ret=true;
	}
	return ret;
}

function validaEmail()
{
	var idMail=document.getElementById("idEmail");
	//Creamos un objeto 
	object=document.getElementById(idMail);
	valueForm=object.value;
 
	// Patron para el correo
	var patron=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	if(valueForm.search(patron)==0)
	{
		//Mail correcto
		
		return true;
	}
	//Mail incorrecto
	return false;
}

function validaMensaje(){
	var ret=false;
	var elemento=document.getElementById("idMensaje");
	if(elemento.value==""||elemento.value.length<=5){
		alert("El mensaje no puede ser vacío");
	} else {
		ret=true;
	}
	return ret;
}

function validar(e){
	if(validaNombre()&&validaEmail()&&validaMensaje()&&confirm("Pulsa aceptar si deseas enviar el formulario")){
		return true;
	}
	e.preventDefault();
	return false;
}

function error(elemento) {
    elemento.className = "error";
    elemento.focus();
}

function limpiarError(elemento) {
    elemento.className = "";
}