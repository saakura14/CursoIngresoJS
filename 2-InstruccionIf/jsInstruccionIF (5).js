function mostrar()
{
	var edad;
//tomo la edad  

	edad=document.getElementById('edad').value;


	if(!(edad<13||edad>17))
	{
		alert("Usted es Adolescente");
	}  
	

}//FIN DE LA FUNCIÓN