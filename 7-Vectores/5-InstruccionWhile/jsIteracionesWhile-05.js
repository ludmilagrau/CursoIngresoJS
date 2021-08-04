/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;

	sexo = prompt("Ingrese F o M").toUpperCase();

	while(sexo != "F" && sexo != "M")
	{
		sexo = prompt("Sexo inválido, ingrese nuevamente F o M").toUpperCase();
	}

	document.getElementById("txtIdSexo").value = sexo;

}//FIN DE LA FUNCIÓN