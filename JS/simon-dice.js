var nombre = prompt('¿Como te llamas?')
var edad = parseInt(prompt('¿Cuantos años tienes?'))

function imprimerEdad(nombre, edad)
{
  document.write(`${nombre} tiene ${edad} años`)
}

imprimerEdad(nombre,edad)
/* imprimerEdad(nombre,edad)
imprimerEdad('Vicky', 40)
imprimerEdad('Arnold', 30)
imprimerEdad('Felipe', 18) */