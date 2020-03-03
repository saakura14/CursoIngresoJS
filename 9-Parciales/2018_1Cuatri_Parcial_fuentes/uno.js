
function mostrar()
{
	var Nombre;
	var CantidadDePersonas;
	var CantidadDeDias;
	var FormaDePago;
	var Respuesta;

	var mmaximoCantidadDePersonas;
	var mmaximoCantidadDePersonasNombre;
	var maximoCantidadDeDiasHospedados;
	var maximoCantidadDeDiasHospedadosCantidadDePersonas;
	var Contador;
	var ContadorQR;
	var ContadorEfectivo;
	var ContadorTarjeta;
	var acumulador;
	var MasUtilizado;
	
	acumulador=0
	ContadorQR=0
	ContadorTarjeta=0
	ContadorEfectivo=0
	Contador=0


	Respuesta=="S"

	while(Respuesta=="S")
	{
		Nombre=prompt("Ingrese nombre");
	}while(!isNaN(Nombre));

	do
	{
		CantidadDePersonas=prompt("Ingrese la cantidad de personas");
		CantidadDePersonas=parseInt(CantidadDePersonas);
	}while(isNaN(CantidadDePersonas) || CantidadDePersonas<1 && CantidadDePersonas<20)
	
	do
	{
		CantidadDeDias=prompt("Ingrese la cantidad de dias");
		CantidadDeDias=parseInt(CantidadDeDias);
	}while(isNaN(CantidadDeDias) || CantidadDeDias<1 && CantidadDeDias<31)
	
	do
	{
		FormaDePago=prompt("Ingrese forma de pago");
	}while(!isNaN(FormaDePago) || FormaDePago!="QR" || FormaDePago!="Tarjeta" || FormaDePago!="Efectivo");
// Validacion
	

	if(Contador==0 || CantidadDePersonas>mmaximoCantidadDePersonas)
	{
		mmaximoCantidadDePersonas=CantidadDePersonas;
		mmaximoCantidadDePersonasNombre=Nombre;
	}

	if(Contador==0 || CantidadDeDias>maximoCantidadDeDiasHospedados)
	{
		maximoCantidadDeDiasHospedados=CantidadDeDias;
		maximoCantidadDeDiasHospedadosCantidadDePersonas=CantidadDePersonas;
	}

	switch(FormaDePago)
	{
		case "QR"
			ContadorQR++;
			break;
		case "Tarjeta"
			ContadorTarjeta++;
			break;
		case "Efectivo"
			ContadorEfectivo++;
			break;
	}//fin del while

	Respuesta=prompt("S para continuar");
	Contador++;

	promedio=acumulador/Contador

	if(ContadorQR>ContadorTarjeta && ContadorQR>ContadorEfectivo)
	{
		MasUtilizado="QR"
	}else
	{
		if(ContadorTarjeta>ContadorEfectivo)
		{
			MasUtilizado="Tarjeta"
		}else
		{
			MasUtilizado="Efectivo"
		}	
	}
}//Fin del ejercicio
