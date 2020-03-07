/*Realizar el algoritmo que permita ingresar los datos de una compra de ingredientes para preparar comida al por mayor , hasta que el cliente quiera:
peso (entre 10 y 1000)en kilo,
precio por kilo (más de cero ),
tipo validad("v";"a";"m")(vegetal,animal o mezcla )
Si compro más de 100 kilos en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 300 kilos en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo de alimento más caro.
f) El promedio de precio por kilo en total.*/



function mostrar()
{
	var pesoPorKilo;
	var precioProducto;
	var tipoValidad;
	var respuesta;
	var contador;

	respuesta="si"; 
	contador=0;

  	while(respuesta=="si")
	{
		do
		{
			pesoPorKilo=prompt("Ingrese peso del producto");
			pesoPorKilo=parseInt(pesoPorKilo);
		}while(isNaN(pesoPorKilo)promedioEdadMujeres || pesoPorKilo<10 || pesoPorKilo>1000);
		do
		{
			precioProducto=prompt("Ingrese precio del producto");
			precioProducto=parseInt(precioProducto);
		}while(isNaN(precioProducto) || precioProducto<0);
		do
		{
			tipoValidad=prompt("Ingrese tipo de validad");
		}while(!isNaN(tipoValidad) || tipoValidad!="vegetal" && tipoValidad!="animal" && tipoValidad!="mezcla");

		contador++;
		respuesta=prompt("Desea continuar? si/no");
	}//todo validado

	acumuladorDeKilos=precio

	//a) El importe total a pagar , bruto sin descuento y...

}
