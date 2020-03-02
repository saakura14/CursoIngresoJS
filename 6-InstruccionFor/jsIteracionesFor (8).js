function mostrar()
{
	var NumeroIngresado;
	var contador;

	NumeroIngresado=prompt("Ingrese Numero");
	NumeroIngresado=parseInt(NumeroIngresado);

	for(contador=2;contador<NumeroIngresado;contador++)
	{
		console.log(contador);
		if(NumeroIngresado%contador==0)
		{
			console.log(NumeroIngresado + " No es primo ");
			break;
		}
	}

	if(NumeroIngresado==contador)
	{
		console.log(NumeroIngresado + " Es primo");
	}	
}//FIN DE LA FUNCIÓN