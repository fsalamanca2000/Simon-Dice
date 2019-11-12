var caracteristicasFelipe ={
  nombre: 'Felipe',
  apellido: 'Salamanca',
  edad: 18
}

var caracteristicasDario = {
  nombre: 'Dario',
  apellido: 'Mendez',
  edad: 25
}
function imprimerNombreEnMayuscula({ nombre })
{
  console.log(nombre.toUpperCase())
}

imprimerNombreEnMayuscula(caracteristicasFelipe)
imprimerNombreEnMayuscula(caracteristicasDario)
//Si utilizo {} dentro de los () de una funcion nos permite crear un atributo directamente 
imprimerNombreEnMayuscula({nombre: 'Pepito'})
//Si utilizo un atributo que no sea el correspondiente no se va a ejecutar
imprimerNombreEnMayuscula({ apellido: 'Gomez'})
