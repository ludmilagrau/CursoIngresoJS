function mostrar()
{
    let tipo;
    let cantidad;
    let precio;
    let seguir;
    let descuento = 0;
    let importeBruto = 0;
    let importe;
    let importeNeto;
    let acumBolsas = 0;
    let mayorPrecio;
    let mayorTipo;
    let flag = 1;
    let acumCal = 0;
    let acumA = 0;
    let acumCem = 0;
    let tipoMasBolsas;
    let cantidadMasBolsas = 0;

  do 
  {
    tipo = prompt("ingrese un tipo (arena, cal, cemento)").toLowerCase();
    while (tipo != "arena" && tipo != "cal" && tipo != "cemento") 
    {
      tipo = prompt("tipo no valido, reingrese un tipo (arena, cal, cemento)").toLowerCase();
    }
    cantidad = parseInt(prompt("ingrese cuantos productos quiere"));
    while (isNaN(cantidad) || cantidad < 0) 
    {
      cantidad = parseInt(prompt("porfavor, ingrese cuantos productos quiere"));
    }
    precio = parseInt(prompt("ingrese el precio"));
    while (isNaN(precio) || precio < 0) 
    {
      precio = parseInt(prompt("su numero es invalido, reingrese el precio"));
    }
    acumBolsas += cantidad;
    importe = precio * cantidad;
    importeBruto += importe;

    if (tipo == "arena") 
    {
      acumA += cantidad;
    } 
    else if (tipo == "cal") 
    {
      acumCal += cantidad;
    } 
    else 
    {
      acumCem += cantidad;
    }
    if (flag || precio > mayorPrecio) 
    {
      mayorPrecio = precio;
      mayorTipo = tipo;
      flag = 0;
    }


    seguir = prompt("usted desea seguir? (s/n").toLowerCase();
  } 
  while (seguir == "s");

  if (acumBolsas > 30) 
  {
    descuento = importeBruto * 0.25;
  } 
  else if (acumBolsas > 10)
  {
    descuento = importeBruto * 0.15;
  }
  importeNeto = importeBruto - descuento;
 
  if (acumCal > acumCem && acumCal > acumA) 
  {
    cantidadMasBolsas = acumCal;
    tipoMasBolsas = "cal";
  } 
  else if (acumCem >= acumCal && acumCem > acumA) 
  {
    cantidadMasBolsas = acumCem;
    tipoMasBolsas = "cemento";
  } 
  else 
  {
    cantidadMasBolsas = acumA;
    tipoMasBolsas = "arena";
 }
  document.write("importe total a pagar es " + importeBruto + "<br>");
  if (descuento > 0) 
  {
    document.write("importe total a pagar (con descuento) " + importeNeto + "<br>");

  document.write("tipo con mas cantidad de bolsas " + tipoMasBolsas + " con " + cantidadMasBolsas + "bolsas <br>");

  document.write("tipo mas caro " + mayorTipo + " precio: " + mayorPrecio + "<br>");
  }




}