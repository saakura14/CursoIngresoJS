function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño)
{
	case "Julio":
	case "Agosto":
		alert ("Abrigate que hace frio.")
		break;
	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
	case "Enero":
	case "Febrero":
	case "Marzo":
		alert("Ya pasamos el frio, ahora calor!!!.")
		break;
	case "Abril":
	case "Mayo":
	case "Junio":
		alert ("Falta para el invierno.")
}
}//FIN DE LA FUNCIÓN