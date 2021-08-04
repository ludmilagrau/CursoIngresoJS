function mostrar()
{
	let nombre;
	let nacionalidad;
	let edad;
	let sexo;
	let estado;
	let temperatura;
	let nacionalidadMasTemp;
	let maxTemp;
	let solteros;
	let contadorMaySolteros = 0;
	let contadorMSolteras = 0;
	let mayoresFiebre = 0;
	let contMujeresCasadas = 0;
	let acumMujeresCasadas = 0;
	let promedio = 0;
	let flag = 1;
	let seguir;

	do
	{
	nombre = prompt("Ingrese el nombre: ");
	while(nombre.length == 0)
	{
	nombre = prompt("Error. Ingrese un nombre válido: ");
	}

	nacionalidad = prompt("Ingrese la nacionalidad: ");
	while(nacionalidad.length == 0)
	{
		nacionalidad = prompt("Error. Ingrese nacionalidad válida: ");
	}
	
	edad = parseInt(prompt("Ingrese la edad: "))
	while(isNaN(edad) || edad < 1)
	{
		edad = parseInt(prompt("Error. Ingrese edad válida: "));
	}

	sexo = prompt("Ingrese el sexo (F/M): ").toLowerCase();
	while(sexo != "f" || sexo != "m")
	{
	sexo = prompt("Error. Ingrese sexo válido (F/M): ");
    }

	estado = prompt("Ingrese estado civil (Casado/Soltero/Viudo): ").toLowerCase();
	while(estado != "viudo" || estado != "casado" || estado != "soltero")
	{
	estado = prompt("Error. Ingrese estado civil válido (Casado/Soltero/Viudo): ");
	}
	
	temperatura = parseFloat(prompt("Ingrese temperatura corporal (30-45): "));
	while(isNaN(temperatura) || temperatura < 30 || temperatura > 45)
	{
	temperatura = parseFloat(prompt("Error. Ingrese temperatura válida (30-45): "));
	}

	if(flag || temperatura > maxTemp)
	{
		maxTemp = temperatura;
		nacionalidadMasTemp = nacionalidad;
		flag = 0;
	}

	if(estado == "soltero" && edad > 17)
	{
		contadorMaySolteros++;
	}

	if(sexo == "f" && estado != "casado")
	{
		contadorMSolteras++;
	}

	if(edad > 17 && temperatura > 38)
	{
	mayoresFiebre++;
	}

	if(sexo == "f" && estado == "casado")
	{
	contMujeresCasadas++;
	acumMujeresCasadas += edad;
	}

	seguir = prompt("¿Desea ingresar otro pasajero? (s/n): ").toLowerCase();
	} while(seguir == "s");

	document.write("a) ")




}
