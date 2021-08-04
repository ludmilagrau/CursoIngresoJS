/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let acumPos = 0;
	let acumNeg = 1;
	let respuesta = "si";
	let numero;
	flag = 1;

	do
	{
	numero = parseInt(prompt("Ingrese un número"));

	if(numero >=0)
	{
		acumPos += numero;

	}

	else
	{
		acumNeg *= numero;
		flag = 0;
	}

	respuesta = prompt("¿Desea ingresar otro número?");
	}
	while(respuesta == "si");

	if(flag)
	{
		acumNeg = 0;
	}

	document.getElementById("txtIdSuma").value = acumPos;
	document.getElementById("txtIdProducto").value = acumNeg;


}//FIN DE LA FUNCIÓN