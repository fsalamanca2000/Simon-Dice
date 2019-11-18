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

var personas = [felipe, alan, martin, dario, paula, vicky]

for(var i=0; i <personas.length; i++)
{
  var persona = personas[i]
  console.log(`${persona.nombre} mide ${persona.altura} mts`)
}