/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let promedio;
	let numero;
	let contador = 0;
	let acumulador = 0;
	let respuesta;

	do
	{
	numero = parseInt(prompt("Ingrese un número"));
	acumulador = acumulador + numero;
	contador ++;
	respuesta = prompt("¿Desea ingresar otro número?");
	}
	while(respuesta == "si");

	promedio = acumulador / 5;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN