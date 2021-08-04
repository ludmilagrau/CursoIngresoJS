/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let numero;
	let acumNeg = 0;
	let acumPos = 0;
	let contPos = 0;
	let contNeg = 0;
	let contCeros = 0;
	let contPares = 0;
	let promPos = 0;
	let promNeg = 0;
	let diferencia;
	let respuesta;

	do
	{
		numero = parseInt(prompt("Ingrese un número"));

		{
		while(isNaN(numero))
		{
			parseInt(prompt("Número inválido. Ingrese un número"));
		}

		if(numero > 0)
		{
			acumPos+= numero;
			contPos++;
		}

		else if (numero < 0)
		{
			acumNeg+= numero;
			contNeg++;
		}
		else
		{
			contCeros;
		}

		if(numero %2 == 0)
		{
			contPares++;
		}
	}

		respuesta = prompt("¿Desea ingresar otro número?");
	}
		while(respuesta == "si");

		promNeg = contNeg / acumNeg;
		promPos = contPos / acumPos;
		
		diferencia = acumPos - acumNeg;

		document.write("La suma de los negativos es " + acumNeg + "<br>");
		document.write("La suma de los positivos es " + acumPos + "<br>");
		document.write("La cantidad de negativos es " + contNeg + "<br>");
		document.write("La cantidad de positivos es " + contPos + "<br>");
		document.write("La cantidad de ceros es " + contCeros + "<br>");
		document.write("La cantidad de numeros pares es " + contPares + "<br>");
		document.write("El promedio de positivos es " + promPos + "<br>");
		document.write("El promedio de negativos es " + promNeg + "<br>");
		document.write("La diferencia entre positivos y negativos es " + diferencia);






}