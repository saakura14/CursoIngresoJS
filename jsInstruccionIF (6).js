function mostrar()
{
	var edad;
//tomo la edad
	edad=document.getElementById('edad').value;

	if(edad>17)
	{
		alert("Es mayor");
	}  
	if(edad>12&&edad<18)
	{
		alert("Es Adolescente");
	}
	else
	{
		alert("Niño");
	}
	
}//FIN DE LA FUNCIÓN