/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los Barbijos, la cantidad de unidades y el fabricante
b) Del ítem con más unidades, el fabricante
c) Cuántas unidades de jabones hay en total
*/

function mostrar()
{
	var tipoProducto;
	var precioProducto;
	var cantidadDeUnidades;
	var marca;
	var fabricante;
	var contador;

	var precioMasCaroBarbijoCantidad;
	var precioMasCaroBarbijoFabricante;
	var precioMasCaroBarbijo;
	var contadorBarbijo;

	var cantidadDeUnidadesMaximo;
	var cantidadDeUnidadesMaximoFabricante;

	var cantidadDeUnidadesJabon;
	var acumuladorJabones;


	acumuladorJabones=0;
	cantidadDeUnidades=0;
	contadorJabones=0;
	contador=0;

	while(contador<5)
	{
		marca=prompt("Ingrese marca del producto");
		fabricante=prompt("Ingrese el fabricante");

		do
		{
			tipoProducto=prompt("Ingrese tipo de producto");
		}while(!isNaN(tipoProducto) || tipoProducto!="barbijo" && tipoProducto!="jabón" && tipoProducto!="alcohol");
		do
		{
			precioProducto=prompt("Ingrese precio del producto");
			precioProducto=parseInt(precioProducto);
		}while(isNaN(precioProducto)|| precioProducto<100 || precioProducto>300);
		do
		{
			cantidadDeUnidades=prompt("Ingrese cantidad de unidades");
			cantidadDeUnidades=parseInt(cantidadDeUnidades);
		}while(isNaN(cantidadDeUnidades) || cantidadDeUnidades<1 || cantidadDeUnidades>1000);



		//a) Del más caro de los Barbijos, la cantidad de unidades y el fabricante
		if(contador==0 ||tipoProducto=="barbijo" && precioProducto>precioMasCaroBarbijo)
		{
			precioMasCaroBarbijo=precioProducto;
			precioMasCaroBarbijoCantidad=cantidadDeUnidades;
			precioMasCaroBarbijoFabricante=fabricante;
		}
		//b) Del ítem con más unidades, el fabricante
		if(contador==0 || cantidadDeUnidades>cantidadDeUnidadesMaximo)
		{
			cantidadDeUnidadesMaximo=cantidadDeUnidades;
			cantidadDeUnidadesMaximoFabricante=fabricante;
		}
		//c) Cuántas unidades de jabones hay en total
		if(tipoProducto=="jabón")
		{
			contadorJabones++;
		}
		contador++;
		acumuladorJabones=acumuladorJabones+contadorJabones;

	}


	document.write("<br> El barbijo mas caro es " + precioMasCaroBarbijo + " la cantidad es " + precioMasCaroBarbijoCantidad + " Su fabricante es " + precioMasCaroBarbijoFabricante);
	document.write("<br> El item con mas unidades es " + cantidadDeUnidadesMaximo + " Su fabricante es " + cantidadDeUnidadesMaximoFabricante);
	document.write("<br> Hay " +contadorJabones+ " Jabones." );
}
