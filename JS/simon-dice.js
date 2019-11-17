var felipe = {
  nombre: 'Felipe',
  apellido:'Salamanca',
  edad: 18,
  peso: 63
}

console.log(`Al inicio del año ${felipe.nombre} pesa ${felipe.peso}kg`)
const VARIACION_PESO = 0.2
const aumentoPeso = (persona) => persona.peso += VARIACION_PESO
const adelgazar = persona => persona.peso -= VARIACION_PESO
for (var i = 1; i <= 365; i++) 
{
  var random = Math.random()
  if (random < 0.25){
    aumentoPeso(felipe)
  }
  else if(random <0.5){
    adelgazar(felipe)
  }
}

console.log(`Al final del año ${felipe.nombre} pesa ${felipe.peso.toFixed(2)}kg`)