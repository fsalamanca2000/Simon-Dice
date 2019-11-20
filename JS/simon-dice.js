function Persona(nombre, apellido, altura){
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function (){
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}
Persona.prototype.esAltoOBajo = () => this.altura > 1.80
var felipe = new Persona('Felipe', 'Salamanca', 1.74)
var erika = new Persona('Erika', 'Luna', 1.65)
var arturo = new Persona('Arturo','Martinez', 1.85)

felipe.saludar()
erika.saludar()
arturo.saludar()
felipe.esAltoOBajo()
erika.esAltoOBajo()
arturo.esAltoOBajo()