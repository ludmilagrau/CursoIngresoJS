function mostrar()
{
    let tipo;
    let precio;
    let cantidad;
    let marca;
    let fabricante;
    let alMasBarato;
    let cantAlMasBArato;
    let fabAlMasBArato;
    let flag = 1;
    let acumAl = 0;
    let contAl = 0;
    let acumBar = 0;
    let contBar = 0;
    let acumJabon = 0;
    let contJabon = 0;
    let tipoMasUnidades;
    let promedio;

for (let i = 0; i < 2; i++) 
{
    tipo = prompt("Ingrese el tipo de producto (barbijo/alcohol/jabon)").toLowerCase();
    while (tipo != "barbijo" && tipo != "alcohol" && tipo != "jabon") 
    {
        tipo = prompt("tipo no valido, ingrese nuevamente (barbijo/alcohol/jabon)");
    }
    precio = parseInt(prompt("ingrese el precio (entre 100 300)"));
    while (isNaN(precio) || precio < 100 || precio > 300) 
    {
        precio = parseInt(prompt("ingrese el precio (entre 100 300)"));
    }
    cantidad = parseInt(prompt("ingrese la cantidad (entre 0 y 1000)"));
    while (isNaN(cantidad) || cantidad <= 1 || cantidad > 1000) 
    {
        cantidad = parseInt(prompt("incorrecto, reingrese la cantidad (entre 0 y 1000)"));
    }
    marca = prompt("ingrese una marca");
    while (marca.length == 0) 
    {
        marca = prompt("ingrese una marca");
    }
    fabricante = prompt("ingrese un fabricante");
    while (fabricante.length == 0) 
    {
        fabricante = prompt("ingrese un fabricante");
    }
    if (tipo == "barbijo") {
        acumBar += cantidad;
        contBar++;

    } else if (tipo == "alcohol")
    {
        acumAl += cantidad;
        contAl++;
    } else 
    
    {
        acumJabon += cantidad;
        contJabon++;
    }
    if (flag || precio < alMasBarato) {
        alMasBarato = precio;
        cantAlMasBArato = cantidad;
        fabAlMasBArato = fabricante;
        flag = 0;
    }
    if (acumAl > acumJabon && acumAl > acumBar) 
    {
        promedio = (precio * acumAl )/ contAl;
        tipoMasUnidades = "alcohol";
    } else if (acumBar >= acumJabon && acumBar > acumAl) 
    {
        promedio = (precio * acumBar) / contBar;
        tipoMasUnidades = "barbijos";
    } 
    else 
    {
        promedio = (precio * acumJabon) / contJabon
        tipoMasUnidades = "jabon";
    }

}


document.write("la cantidades de alcoholes del mas barato son " + cantAlMasBArato + " y su fabricante es " + fabAlMasBArato + "<br>");
document.write("el tipo con mas unidades es " + tipoMasUnidades + " y el promedio es " + promedio + "<br>");
document.write("y hay " + acumJabon + " jabones <br>");

}



















	/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total

---------------------------------------------
Estrategia de resolucion
1- declarar variables (tipo / cantidad / precio / marca / fabricante )esto se lo pedimos al usuario
a) precioMinAl / contAlBarato / fabAlBarato
b) contadorB / contadorA / contadorJ / maxUnidades / acumB / acumA / acumJ / promedio
c) (acumJ)ya lo tuve en cuenta en el punto b

2- generar un bucle que se repita 5 veces (for) porque se las veces que se debe repetir
2.1- cosas que se tienen que hacer 5 veces(van dentro del bucle)
 datos del producto
 2.1.1- pido tipo y valido
 2.1.2- pido precio y valido
 2.1.3- pido cantidad y valido
 2.1.4- pido marca y valido
 2.1.5- pido fabricante y valido
 -------------------------------
 a) me fijo si el producto es de tipo alcohol y si es asi la primer vez que 
 ingresa alcohol guardo el precio en precio barato y las siguientes veces
 que ingrese un alcohol lo comparo con el precio del acohol barato y si es mas barato lo actualizo(tambien guardo cantidad y fabricante)
 b) me fijo de que tipo es el producto y actualizo acumulador y contador de ese tipo
 c) si es de tipo jabon acumulo la cantidad(ya lo hice en el punto b)
-------------------------------------------
3.1 cosas que hago una sola vez despues del for
3.1.1 para el punto b me tengo que fijar cual es el mayor acumulador
y sacar el promedio para ese tipo

3.2 muestro los resultados
*/


