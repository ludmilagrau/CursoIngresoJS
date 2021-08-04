function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;
	
	switch(destino)
	{
		case("Ushuaia"):
		alert("Sur");
		break;

		case("Mar del plata"):
		alert("Este");
		break;

		case("Cataratas"):
		alert("Norte");
		break;

		case("Bariloche"):
		alert("Oeste");
	}

}//FIN DE LA FUNCIÓN