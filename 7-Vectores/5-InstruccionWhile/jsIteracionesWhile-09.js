/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let numero;
	let maximo;
	let minimo;
	let respuesta;
	let flag = 1;

	do
	{
		numero = parseInt(prompt("Ingrese un número"));

		while(isNaN(numero))
		{
			numero = parseInt(prompt("Número inválido. Ingrese un número"));
		}

		if(flag || numero > maximo)
			{
				maximo = numero;
			}

		if(flag || numero < minimo)
			{
				minimo = numero;
				flag = 0;
			}

		respuesta = prompt("¿Desea ingresar otro número?").toLowerCase();
	}
	while(respuesta == "si");

	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;

//Estrategia de resolución
//1 - Declaración de variables
//2- Generar un bucle del tipo mientras el usuario quiera (do-while)
//2.1- Pido un número
//2.2- Valido que sea un número
//2.3- Me fijo si es la primera vez
//2.3.1- Si es la primera vez --> asigno el número a máximo y a mínimo
//2.3.2- Si no es la primera vez
//2.3.3- Me fijo si el número es un nuevo máximo o un nuevo mínimo
//2.3.4- De ser así actualizo las variables según corresponda
//--------------------
//3- Despues del bucle, muestro los resultados

}//FIN DE LA FUNCIÓN