function mostrar()
{
	var contador;
	contador=0

	for (;;)
	{
		contador++
		console.log(contador);
		if (contador==10)
		{
			console.log("break:" + contador);
			break;
		}
		
	}
	console.log("Salida" + contador);	
}