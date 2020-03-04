/*De los movimientos de un banco,necesito saber,
el nombre del cliente, la edad (debe ser mayor de edad),sexo, tipo de transaccion
(extraccion o deposito) e importe. Validar que no sea negativo.
1- Promedio de edad=32,5
2- Nombre del mas joven : Melchor
3- Cantidad de Hombres = 3
4- Cantidad de mujeres = 1
5- Sexo del importe mas alto = F
6- Operacion mas utilizada = Extraccion
7- Importe del mas viejo = 2000 

Jose tiene 37 - M - Extraccion - 1000
Maria 40 - F - Deposito - 2000
Jesus 33 - M - Extraccion - 1500
Melchor 20 - M - Extraccion - 1300
*/


function mostrar()
{
	var NombreCliente;
	var EdadCliente;
	var sexoCliente;
	var TipoTransaccion;
	var importe;
	var Respuesta;
	var EdadSuma
	var Contador;
	var PromedioDeEdad;

	var MinimaEdadJoven
	var MinimaEdadJovenNombre;
	var CantidadDeHombres;
	var CantidadDeMujeres;
	var importeMasAlto;
	var importeMasAltoSexo;
	var OperacionMasUtilizada;
	var MaximoEdadMasViejo;

	EdadSuma=0;
	contador=0;
	contadorExtraccion=0;
	contadorDeposito=0;

	Respuesta="S";

	while(Respuesta="S")
	{
		do
		{
			NombreCliente=prompt("Ingrese Nombre del cliente");
		}while(!isNaN(NombreCliente));
		do
		{
			EdadCliente=prompt("Ingrese edad del cliente");
			EdadCliente=parseInt(EdadCliente);
		}while(isNaN(EdadCliente) || EdadCliente<18 || EdadCliente>100);
		do
		{
			sexoCliente=prompt("Ingrese sexo del cliente");
		}while(!isNaN(sexoCliente) || sexoCliente!="F" && sexoCliente!="M");
		do
		{
			TipoTransaccion=prompt("Ingrese Tipo de transaccion");
			TipoTransaccion=parseInt(TipoTransaccion);
		}while(!isNaN(TipoTransaccion) || TipoTransaccion!="Extraccion" && TipoTransaccion!="Deposito");
		do
		{
			importe=prompt("Ingrese importe");
			importe=parseInt(importe);
		}while(isNaN(importe) || importe<1 || importe>5000); 
		//validacion


		if(Contador==0 || EdadCliente>MinimaEdadJoven)
		{
			MinimaEdadJoven=EdadCliente;
			MinimaEdadJovenNombre=NombreCliente;
		}
		if(sexoCliente!="F")
		{
			CantidadDeHombres++;
		}
		if(sexoCliente!="M")
		{
			CantidadDeMujeres++;
		}	
		if(Contador==0 || importe>importeMasAlto)
		{
			importeMasAlto=importe;
			importeMasAltoSexo=sexoCliente;
		}

		switch(TipoTransaccion)
		{
			case "Extraccion":
				contadorExtraccion++;
				break;
			case "Deposito":
				contadorDeposito++;
				break;	
		}	

		contador++;


		EdadSuma=EdadSuma+EdadCliente;

		Respuesta=prompt("Ingrese S para continuar");
	}//del while


	PromedioDeEdad=EdadSuma/Contador;
	
	document.write("El promedio es " + PromedioDeEdad + "<br>");
	document.write("El Nombre del mas joven es " + MinimaEdadJovenNombre + "<br>");
	document.write("Cantidad de Hombres " + CantidadDeHombres + "<br>");
	document.write("Cantidad de mujeres " + CantidadDeMujeres + "<br>");
	document.write("Sexo del importe mas alto " + importeMasAlto + "<br>");
	document.write("Operacion mas utilizada " + TipoTransaccion + "<br>");
}
