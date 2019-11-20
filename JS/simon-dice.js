var felipe = {
  nombre: 'Felipe',
  apellido: 'Salamanca',
  altura: 1.72,
  cantidadDeLibros: 100
}
var alan = {
  nombre: 'Alan',
  apellido: 'Gomez',
  altura: 1.85,
  cantidadDeLibros: 60
}
var martin = {
  nombre: 'Martin',
  apellido: 'Gomez',
  altura: 1.82,
  cantidadDeLibros: 78
}
var dario = {
  nombre: 'Dario',
  apellido: 'Juarez',
  altura: 1.71,
  cantidadDeLibros: 91
}
var paula = {
  nombre: 'Paula',
  apellido: 'Barrios',
  altura: 1.65,
  cantidadDeLibros: 97
}
var vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.59,
  cantidadDeLibros: 160
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
//Forma alternativa de reducir el array 
/* var acum = 0

for (var i= 0; i< personas.length; i++){
  acum = acum + personas[i].cantidadDeLibros
} */
const reducer = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros

var totalLibros = personas.reduce(reducer, 0)



console.log(`En total todos tienen ${totalLibros} libros`)