/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave; 
	clave = prompt("Ingrese su clave: ");

	while (clave != "utn750") 
	{
		clave = prompt("Clave invalida!!!. Ingresela nuevamente");
	}
	alert("Clave válida!!!");
	
}//FIN DE LA FUNCIÓN
