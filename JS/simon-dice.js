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

var juan = {
  nombre: 'Juan',
  edad: 15 
}
const mayoriaDeEdad = 18

const esMayordeEdad = ({ edad })=> edad >= mayoriaDeEdad

 function imprimirSiEsMayor(persona) {
  if(esMayordeEdad(persona)){
    console.log('Usted es mayor de edad')
  }
  else if(esMenorDeEdad(persona)){
    console.log('Usted es menor de edad')
  }
}
const esMenorDeEdad = ({ edad }) => edad < mayoriaDeEdad

function permitirAcceso(persona){
  if (esMenorDeEdad(persona))
  {
    console.log('Acceso Denegado washin')
  }
  else{
    console.log('Tiene acceso, siga por favor')
  }
}