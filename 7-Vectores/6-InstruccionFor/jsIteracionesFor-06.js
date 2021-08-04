function mostrar()
{
	{
		let numero;
		cont=0;
		numero = prompt("Ingrese un numero: ")
		while (isNaN(numero) || numero<0) {
			numero = parseInt(prompt("Incorrecto, ingrese un número ENTERO y REAL: "));
		}
	
		for (let i = 1; (i<=numero); i++) {
			if (i % 2 ==0){ 
				console.log(i);
				cont++;
			}
		}
	
		alert("Cantidad de numeros pares es : "+ cont++);
	
	}



}//FIN DE LA FUNCIÓN