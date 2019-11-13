var felipe ={
  nombre: 'Felipe',
  apellido: 'Salamanca',
  edad: 18,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  drone: true
}

function imprimirProfesiones(persona){
  console.log(`${persona.nombre} es:`)
  if(persona.ingeniero === true)
  {
    console.log('Ingeniero')
  } else{
    console.log('No es ingeniero')
  }

  if(persona.cocinero === true)
  {
    console.log('Cocinero')
  } else{
    console.log('No es cocinero')
  }
  if(persona.cantante === true)
  {
    console.log('Cantante')
  } else{
    console.log('No es cantante')
  }
  if(persona.dj === true)
  {
    console.log('DJ')
  } else{
    console.log('No es DJ')
  }
  if(persona.guitarrista === true)
  {
    console.log('Guitarrista')
  } else{
    console.log('No es guitarrista')
  }
  if(persona.drone === true)
  {
    console.log('Piloto de Drone')
  } else{
    console.log('No es pelito de drone')
  }
}

imprimirProfesiones(felipe)

function imprimirSiEsMayor(persona) {
  if(persona.edad >= 18){
    console.log('Usted es mayor de edad')
  }
  else
  {
    console.log('Usted no es mayor de edad')
  }
}

imprimirSiEsMayor(felipe)