/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var alambre;


	largo=document.getElementById('Largo').value;
	largo=parseInt(largo)
	ancho=document.getElementById('Ancho').value;
	ancho=parseInt(ancho);

	alambre=2*(largo+ancho)*3;

	alert("Usted necesita "+alambre+" metros de alambre");

	
}

function Circulo () 
{
	var radio;
	var alambreradio;

	radio=document.getElementById('Radio').value;
	radio=parseInt(radio);

	alambreradio=(2*3.14*radio)*3;

	alert("Usted necesita "+alambreradio+" metros de alambre");
}

function Materiales () 
{
	var largo;
	var ancho;
	var cemento;
	var cal;


	largo=document.getElementById('Largo').value;
	largo=parseInt(largo)

	ancho=document.getElementById('Ancho').value;
	ancho=parseInt(ancho);

	cemento=(largo*ancho)*2

	cal=(largo*ancho)*3

	alert("Usted necesita "+cemento+" bolsas de cemento y " +cal+ " bolsas de cal");
	
}