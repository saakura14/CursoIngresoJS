/*Bienvenidos.
En el ingreso a un viaje en crucero nos solicitan nombre , edad(mayores de 18), sexo("f" o "m") y estado civil("soltero", "casado" o "viudo");
a) El nombre del hombre casado más joven.
b) El sexo y nombre del pasajero/a más viejo.
c) La cantidad de mujeres que hay casadas o viudas.
d) El promedio de edad entre las mujeres.
e) El promedio de edad entre los hombres solteros.*/


function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var respuesta;
	var contador;

	var contadorHombresSolteros;
	var acumuladorEdadSoltero;
	var contadorHombresSolteros;
	var promedioEdadMujeres;
	var promedioEdadHombre;
	var acumuladorEdadMujeres;
	var acumuladorEdad;
	var contadorMujeresCasado;
	var contadorMujeresviudo;
	var contadorMujeres;

	contador=0;
	contadorMujeresCasado=0;
	contadorMujeresviudo=0;
	contadorMujeres=0

	acumuladorEdad=0;
	acumuladorEdadMujeres=0;
	contadorHombresSolteros=0;
	contadorHombresSolteros=0;
	acumuladorEdadSoltero=0;

	respuesta="si";

	while(respuesta=="si")
	{
		do
		{
			nombre=prompt("Ingrese nombre");
		}while(!isNaN(nombre));
		do
		{
			edad=prompt("Ingreese edad");
			edad=parseInt(edad);
		}while(isNaN(edad)|| edad<18 || edad>125);
		do
		{
			sexo=prompt("Ingrese sexo f/m");
		}while(!isNaN(sexo) || sexo!="f" && sexo!="m");
		do
		{
			estadoCivil=prompt("Ingrese estado civil");
		}while(!isNaN(estadoCivil) || estadoCivil!="casado" && estadoCivil!="soltero" && estadoCivil!="viudo");

	
		respuesta=prompt("Desea continuar? si/no");

		//validado

		//a) El nombre del hombre casado más joven.
		if(contador==0 || sexo=="m" && estadoCivil=="casado" || edad<edadHombreCasadoMasJoven)
		{
			edadHombreCasadoMasJoven=edad;
			edadHombreCasadoMasJovenNombre=nombre;
		}
		//b) El sexo y nombre del pasajero/a más viejo.
		if(contador==0 || edad>edadMaxima)
		{
			edadMaxima=edad;
			edadMaximaSexo=sexo;
			edadMaximaNombre=nombre;
		}
		//c) La cantidad de mujeres que hay casadas o viudas.
		if(contador==0 || sexo=="f" && estadoCivil=="casado")
		{
			contadorMujeresCasado++;
		}else
			if(contador==0 || sexo=="f" && estadoCivil=="viudo")
			{
				contadorMujeresviudo++;
			}
		

		//d) El promedio de edad entre las mujeres.
		if(contador==0 || sexo=="f")
		{
			contadorMujeres++;
		}

		acumuladorEdadMujeres=acumuladorEdadMujeres+edad;

		//e) El promedio de edad entre los hombres solteros.
		if(estadoCivil=="soltero" && sexo=="m")
		{
			contadorHombresSolteros++;
		}

		acumuladorEdadSoltero=acumuladorEdadSoltero+edad;

		contador++;
	}

		promedioEdadHombre=acumuladorEdad/contadorHombresSolteros;
		promedioEdadMujeres=acumuladorEdad/contadorMujeres;

		document.write("<br> El nombre del hombre casado más joven es " + edadHombreCasadoMasJovenNombre); 
		document.write("<br> el nombre del pasajero/a más viejo " + edadMaximaNombre + "y el sexo es " + edadMaximaSexo);
		document.write("<br> La cantidad de mujeres que hay casadas es " + contadorMujeresCasado);
		document.write("<br> La cantidad de mujeres que hay viudas es " + contadorMujeresviudo);
		document.write("<br> El promedio de edad entre las mujeres es "+ acumuladorEdadMujeres);
		document.write("<br> El promedio de edad entre los hombres solteros " + acumuladorEdadSoltero);
}

