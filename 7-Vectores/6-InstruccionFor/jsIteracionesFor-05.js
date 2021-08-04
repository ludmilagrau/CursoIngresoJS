function mostrar()
{
	for( ; ; )
	{
		numero = parseInt(prompt("Ingrese un número:"));

		while(isNaN(numero))
		{
			numero = parseInt(prompt("ERROR. Ingrese un número:"))
		}
		if (numero == 9)
		{
			break;
		}
	}



}//FIN DE LA FUNCIÓN