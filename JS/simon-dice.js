var felipe = {
  nombre: 'Felipe',
  apellido: 'Salamanca',
  altura: 1.72
}
var alan = {
  nombre: 'Alan',
  apellido: 'Gomez',
  altura: 1.85
}
var martin = {
  nombre: 'Martin',
  apellido: 'Gomez',
  altura: 1.82
}
var dario = {
  nombre: 'Dario',
  apellido: 'Juarez',
  altura: 1.71
}
var paula = {
  nombre: 'Paula',
  apellido: 'Barrios',
  altura: 1.65
}
var vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.59
}

const esAlta = persona => persona.altura >= 1.8
const esBaja = persona => persona.altura <= 1.7
var personas = [felipe, alan, martin, dario, paula, vicky]

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

const pasarAlturaCms = persona => ({
  ...persona,
  altura: personas.altura *100
})


var personasCms = personas.map(pasarAlturaCms)
console.log(personasCms)