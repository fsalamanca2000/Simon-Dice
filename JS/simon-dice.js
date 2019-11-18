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
const META = felipe.peso -3
const comeMucho = () => Math.random < 0.3
const realizaDeporte = () => Math.random < 0.4
var dias = 0
while(felipe.peso > META)
{
  if(comeMucho())
  {
    aumentoPeso(felipe)
  }
  if(realizaDeporte())
  {
    adelgazar(felipe)
  }
  dias += 1
}

console.log(`Tras ${dias} dias, ${felipe.nombre} adelgazo 3kg`)