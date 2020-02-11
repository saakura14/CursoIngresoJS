function mostrar()
{
	var edad;
	var estadoCivil;
//tomo la edad
	edad=document.getElementById('edad').value;

	estadoCivil=document.getElementById('estadoCivil').value;

	if (edad<18 && estadoCivil!="soltero")
	{
		alert ("Es muy pequeño para NO ser soltero.");
	}
	else
	{
		alert ("Es muy grande para NO ser soltero.");
	}




}//FIN DE LA FUNCIÓN