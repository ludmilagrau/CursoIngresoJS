function mostrar()
{
	let destino;
	let estacion;
	let resultado;

	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;

	switch(estacion)
	{
		case("Invierno"):
		if(destino == "Bariloche")
		{
		resultado = "Se viaja";
		}
		else
		{
		resultado = "No se viaja";
		}
		break;

		case("Verano"):
		if(destino == "Cataratas" || destino == "Mar del plata")
		{
		resultado = "Se viaja";
		}
		else
		{
		resultado = "No se viaja";
		}
		break;

		case("Otoño"):
		resultado = "Se viaja";
		break;

		case("Primavera"):
		if(destino == "Bariloche")
		{
		resultado = "No se viaja";
		}

		else
		{
		resultado = "Se viaja";
		}

	}

	alert(resultado);
}