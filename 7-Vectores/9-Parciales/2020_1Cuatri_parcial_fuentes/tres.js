function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let nombreMaxTemp;
	let maxTemp;
	let contHombreFelices = 0;
	let contHombresViudos = 0;
	let contHombresSolteros = 0;
	let contViejosFiebre = 0;
	let acumHombresSolteros = 0;
	let flag = 1;
	let seguir;
	let promedio = 0;
do 
{
	nombre = prompt("ingrese un nombre");

	sexo = prompt("ingrese su sexo, (m/f)").toLowerCase();
	while (sexo != "m" && sexo != "f") {
	sexo = prompt("sexo no valido, (m/f)").toLowerCase();
	}
	edad = parseInt(prompt("ingrese la edad"));
	while (isNaN(edad) || edad < 0) 
	{
		edad = parseInt(prompt("porfavor, ingrese una edad"));
	}
	estadoCivil = prompt("ingrese estado civil,soltero/ casado/viudo ").toLowerCase();
	while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo") 
	{
		estadoCivil = prompt("ingrese estado civil,soltero/ casado/viudo ").toLowerCase();
	}

	temperatura = parseFloat(prompt("ingrese la temperatura (entre 30 y 40"));
	while ( temperatura < 30 && temperatura > 40) 
	{
		temperatura = parseFloat(prompt("temperatura no valida"));
	}
	if (flag || temperatura > maxTemp) 
	{
		maxTemp = temperatura;
		nombreMaxTemp = nombre;
		flag = 0;
	}
	if (sexo == "m" && estado != "casado") 
	{
		contHombreFelices++;
	}
	if (edad > 60 && temperatura > 38) 
	{
		contViejosFiebre++;
	}
	if (edad > 18 && estadoCivil == "viudo") 
	{
		contHombresViudos++;
	}
	if (sexo == "m" && estadoCivil == "vsoltero")
	 {
		contHombresSolteros++;
		acumHombresSolteros += edad;
	}
	promedio = acumHombresSolteros / contHombresSolteros;

	seguir = prompt("desea continuar? (s/n)").toLowerCase();
} while (seguir == "s");

document.write("la persona con mas temperatura es " + nombreMaxTemp + " y tiene " + maxTemp + " grados <br>");
document.write("mayores de edad viudos: " + contHombresViudos + "<br>");
document.write("hombres solteros o viudos: " + contHombreFelices + "<br>");
document.write("personas de la tercera edad con fiebrre " + contViejosFiebre + "<br>");
document.write("y el promedio de edad entre los hombres solteros es " + promedio);
}










/*
1) declarar variables: 
a) variables para tomar datos: nombre, edad, sexo, estado civil, temp corporal
b) variables para mostrar datos: masTemp, mayoresViudos, hombresSolteros, hombresViudos, terceraEdad, promedioEdad.

2) do-while, dentro del  bucle:
a) pedir datos, 


*/



