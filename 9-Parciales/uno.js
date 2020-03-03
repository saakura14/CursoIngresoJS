/*
b)Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

informar el huésped que trajo más personas en
una sola reserva.

la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva
*/
function mostrar()
{
	var Nombre;
	var CantidadDePersonas;
	var CantidadDeDia;
	var FormaDePago;
	var Respuesta;
	var MaximoCantidadDePersonas;
	var MaximoCantidadDePersonasNombre;
	var Contador;
	var MaximoCantidadDeDias;

	Contador=0

	Respuesta="S"
	while(Respuesta=="S")
	{
		Nombre=prompt("Ingrese nombre");

		while(isNaN(CantidadDePersonas) || CantidadDePersonas<1 && CantidadDePersonas>20);
		{
			CantidadDePersonas=prompt("Ingrese cantidad de personas");
			CantidadDePersonas=parseInt(CantidadDePersonas);
		}
		do
		{
			CantidadDeDia=prompt("Ingrese cantidad de dia");
			CantidadDeDia=parseInt(CantidadDeDia);
		}
		while(isNaN(CantidadDeDia) || CantidadDeDia<1 && CantidadDeDia>31);
		{
			FormaDePago=prompt("Ingrese forma de pago");
		}
		do
		
		while(!isNaN(FormaDePago) || FormaDePago!="efectivo" || FormaDePago!= "QR" || FormaDePago!= "Tarjeta");
		}
		if(contador==0 || CantidadDePersonas>MaximoCantidadDePersonas)
		{
			MaximoCantidadDePersonas=CantidadDePersonas
			MaximoCantidadDePersonasNombre=Nombre
		}
		if(contador==0 || MaximoCantidadDeDias>CantidadDeDia)
		{
			MaximoCantidadDeDias=CantidadDeDia
			MaximoCantidadDePersonas=CantidadDePersonas
		}	
			







		Respuesta=prompt("S para continuar");
		Respuesta=prompt(contador++);
	}

}
