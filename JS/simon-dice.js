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
/*function imprimerNombreEnMayuscula(persona)
{
  var { nombre } = persona
  console.log(nombre.toUpperCase())
}

imprimerNombreEnMayuscula(caracteristicasFelipe)
imprimerNombreEnMayuscula(caracteristicasDario) */
//Si utilizo {} dentro de los () de una funcion nos permite crear un atributo directamente 
//imprimerNombreEnMayuscula({nombre: 'Pepito'})
//Si utilizo un atributo que no sea el correspondiente no se va a ejecutar
//imprimerNombreEnMayuscula({ apellido: 'Gomez'})

function imprimirNombreYEdad(persona)
{
  var {nombre} = persona
  var {edad} = persona
  console.log('Hola soy ' + nombre + ' y tengo ' + edad + ' años' )
}

imprimirNombreYEdad(caracteristicasFelipe)
imprimirNombreYEdad(caracteristicasDario)


function cumpleanos(persona){
  return{
    ...persona,
    edad: persona.edad +1
  }
}