var signo = prompt('¿Cual es tu signo zodiacal?\n (No escribir en mayuscula y con tildes)')
switch(signo)
{
case 'acuario':
    console.log(`Tu signo(${signo}) este mes dice: Te guardas el enojo y evitas hablar de lo que te molesta para evitar confrontaciones, ¡cuidado! La copa se podría llenar y podrías explotar de forma desproporcionada. Algunas veces es mejor expresar lo que sientes y aclarar las cosas para evitar resentimientos y rencores.`)
break
case 'cancer':
  console.log(`Tu signo(${signo}) este mes dice: Comienza una etapa ideal para encontrar armonía, serenidad y para compartir buenos momentos con tu pareja, así que ¡es el momento para aprovecharlos al máximo! Es necesario que mantengas el ánimo y el interés para sacar adelante tus proyectos, de lo contrario los abandonarás y no podrás retomarlos en otro momento.`)
break
case 'capricornio':
    console.log(`Tu signo(${signo}) este mes dice: El día comienza con grandes oportunidades para que recobres el amor de tu pareja, solo debes entender que es hora de reconocer tus equivocaciones y de estar dispuesto a comenzar sin rencores ni recuerdos negativos. Debes empezar a avanzar en la planificación de tu futuro, traza las metas que quieres alcanzar y comienza a conducirte hacia donde deseas.`)
break
case 'piscis':
    console.log(`Tu signo(${signo}) este mes dice: Confía en lo que sabes y haces, y todo problema dejará de serlo. Si utilizas tu talento como debe ser y trabajas con empeño, podrás establecer cambios positivos en tu vida y convertir en realidad tus más importantes objetivos. Si controlas tu excesiva sensibilidad, podrías evitarte conflictos y sufrimientos innecesarios.`)
break 
case 'aries':
    console.log(`Tu signo(${signo}) este mes dice: El día te invita a reflexionar sobre lo que quieres hacer en realidad, es hora de tomar decisiones y de reencauzar tus objetivos hacia donde deseas hacerlos realidad. Debes cuidar tu salud, el exceso de trabajo y el poco descanso han desgastado tus energías.`)
break
case 'tauro':
    console.log(`Tu signo(${signo}) este mes dice: Debes utilizar tu fuerza interna para evitar que los problemas y conflictos laborales te depriman. Comienza una buena etapa para avanzar en nuevos proyectos y para retomar los vínculos con personas que en algún momento significaron mucho para ti y que tenías olvidadas. Es un buen momento para el romance y para las actividades sociales.`)
break
case 'geminis':
    console.log(`Tu signo(${signo}) este mes dice: Comienza una temporada para la diversión y el reencuentro con viejos amigos. Debes poner mucha atención a las oportunidades que llegan, pero no te deslumbres por lo buenas que parecen, podrías perder más de lo que tienes. Debes confiar más en ti y en tus habilidades.`)
break
case 'escorpio':
    console.log(`Tu signo(${signo}) este mes dice: Es importante que continúes fortaleciendo tus recursos económicos, esto te permitirá mantener tu independencia y también tu autonomía. Cuentas ahora con la ayuda de los astros para abrirte nuevos caminos y resolver los 'impasses' financieros que te venían aquejando. Sin embargo, no debes excederte en tus gastos e inversiones.`)
break
case 'leo':
    console.log(`Tu signo(${signo}) este mes dice: Algunas veces mirar hacia el mañana es lo que te permite avanzar en el presente, hacia lo que siempre has deseado. Te aconsejan los astros prudencia al realizar negocios con desconocidos y que te ofrecen ganancias jugosas y fáciles, podrías ser engañado y perder los ahorros de toda la vida. Es un buen día para el descanso.`)
break
case 'sagitario':
    console.log(`Tu signo(${signo}) este mes dice: Durante esta época, las vibraciones planetarias favorecen el reconocimiento, y es posible que logres todo aquello que con esfuerzo y sacrificio has ganado bien. Es conveniente mantener la diplomacia en el diálogo con los demás, para que tus comentarios no sean mal interpretados y te ocasionen problemas innecesarios.`)
break
case 'libra':
    console.log(`Tu signo(${signo}) este mes dice: Hoy sentirás que el equilibrio que te caracteriza parece estar roto y te sientes inseguro y temeroso. Es necesario que comiences a fortalecer tu vida interior, trata de serenarte y encontrar la paz que requieres para reflexionar sobre lo que te sucede y está rompiendo tu armonía.`)
break
case 'virgo':
    console.log(`Tu signo(${signo}) este mes dice: Dejarte llevar por el orgullo te puede hacer no solo tomar decisiones equivocadas, sino descalificar consejos que podrían ser valiosos en ciertos momentos importantes. Aprovecha el día para compartir algunos momentos con tu familia.`)
break
default: alert('No se ha encontrado tu signo zodiacal vuelve a intentarlo recargando la pagina')
break
}
