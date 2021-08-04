function mostrar()

	{
	let destino;
	let estacion;
	let precio = 15000;
	let precioFinal;

	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;

	switch(estacion)
	{
		case("Invierno"):
		if (destino == "Bariloche")
		{
			precioFinal = precio + (precio * 0.20);
		}
		else if(destino == "Mar del plata")
		{
			precioFinal = precio - precio * 0.20;
		}
		else
		{
			precioFinal = precio - precio * 0.10;
		}

		break;


		case("Verano"):
		
		if(destino == "Bariloche")
		{
			precioFinal = precio - precio * 0.20;
		}
		
		else if(destino == "Mar del plata")
		{
			precioFinal = precio + precio * 0.20;
		}

		else
		{
			precioFinal = precio + precio * 0.10;
		}
		break;

		case("Otoño"):
		case("Primavera"):
		if(destino == "Cordoba")
	{
		precioFinal = precio
	}

else
{
	precioFinal = precio + precio * 0.10
}
	}
alert("El precio es " + precioFinal);


}