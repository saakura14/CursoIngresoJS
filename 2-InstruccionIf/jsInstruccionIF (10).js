function mostrar()
{
	var nota;
	//Genero el número nota entre 1 y 10 
	nota=Math.floor((Math.random() * 10) + 1);

	console.log(nota)
	//Genero el número nota entre 1 y 10 

	if(nota>8)
	{
		alert ("EXCELENTE");
	}else
	{
		if(nota<5)
		{
			alert("Vamos, la proxima se puede");
		}else		
		{
			alert("APROBO");
		}
	}

	
	


}//FIN DE LA FUNCIÓN