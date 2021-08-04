function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let nota;

	nota = Math.floor(Math.random() * 10 + 1);
	
	if(nota >= 9)
	{
		alert("Excelente nota: " + nota);
	}
	else if(nota >= 4)
	{
		alert("Aprobó nota: " + nota);
	}
	else 
	{
		alert("Vamos, la próxima se puede nota: " + nota);
	}

}//FIN DE LA FUNCIÓN