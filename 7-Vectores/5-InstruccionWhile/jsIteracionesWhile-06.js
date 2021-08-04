function mostrar()
{
	let numero;
	let contador = 0
	let acumulador = 0;

	while(contador <= 5)
	{
	numero = parseInt(prompt("Ingrese un número"));
	acumulador = acumulador + numero;
	contador ++;
	}

	suma = numero1 + numero2 + numero3 + numero4 + numero5;
	promedio = acumulador / 5;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;

}