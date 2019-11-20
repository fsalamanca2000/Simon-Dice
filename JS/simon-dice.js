function Persona(nombre, apellido, altura){
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function (){
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}
Persona.prototype.esAltoOBajo = function(){
  if(this.altura >= 1.80){
  console.log(`${this.nombre} Su altura es ${this.altura}mts por lo que es una persona alta`)
  }
  else if(this.altura > 1.69 && this.altura < 1.80){
    console.log(`${this.nombre} Su altura es ${this.altura}mts por lo que no es ni alto ni bajo`)
  }
  else if(this.altura <= 1.69){
    console.log(`${this.nombre} Su altura es ${this.altura}mts por lo que es una persona baja`)
  }
}
var felipe = new Persona('Felipe', 'Salamanca', 1.74)
var erika = new Persona('Erika', 'Luna', 1.65)
var arturo = new Persona('Arturo','Martinez', 1.85)

felipe.saludar()
erika.saludar()
arturo.saludar()
felipe.esAltoOBajo()
erika.esAltoOBajo()
arturo.esAltoOBajo()