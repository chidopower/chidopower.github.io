var N,Tema="",Quiz="",NT=1,N10=[],P=[""],R=[""],C=[],PFV=[""],RFV=[""],i=0,iextra=0,juegoTerminado="no",mostrado="no",wins=0,fails=0,Examen="";function aleatorio(e,n){return Math.floor(Math.random()*(n-e+1))+e}function iniciar(){wins=fails=i=0,juegoTerminado="no",C=[],P=[],R=[],PFV=[],RFV=[],N10=[],console.log("inicio() ",C),Examen="<br><br>",Tema=document.getElementById("Tema").value,Quiz=document.getElementById("Quiz").value,cargarPreguntas(),siguientePregunta()}function cargarPreguntas(){"Falso & Verdadero"===Quiz&&cargarFalsoVerdadero(),console.log("NT: ",NT)}function cargarFalsoVerdadero(){"Tema 2"===Tema&&(PFV.push("Es posible intercambiar materia entre un sistema abierto y su entorno."),RFV.push("V"),PFV.push("Es posible intercambiar materia entre un sistema abierto y su entorno."),RFV.push("V"),PFV.push("Es posible intercambiar energía entre un sistema abierto y su entorno."),RFV.push("V"),PFV.push("Es imposible intercambiar materia entre un sistema cerrado y su entorno."),RFV.push("V"),PFV.push("Es imposible intercambiar energía entre un sistema aislado y su entorno."),RFV.push("V"),PFV.push("Es imposible intercambiar materia entre un sistema aislado y su entorno."),RFV.push("V"),PFV.push("Es imposible intercambiar materia entre un sistema abierto y su entorno."),RFV.push("F"),PFV.push("Es imposible intercambiar materia entre un sistema abierto y su entorno."),RFV.push("F"),PFV.push("Es imposible intercambiar energía entre un sistema abierto y su entorno."),RFV.push("F"),PFV.push("Es posible intercambiar materia entre un sistema cerrado y su entorno."),RFV.push("F"),PFV.push("Es posible intercambiar energía entre un sistema aislado y su entorno."),RFV.push("F"),PFV.push("Es posible intercambiar materia entre un sistema aislado y su entorno."),RFV.push("F"),PFV.push("Es posible la transferencia de calor a través de una frontera diatérmica."),RFV.push("V"),PFV.push("Es imposible la transferencia de calor a través de una frontera adiabática."),RFV.push("V"),PFV.push("El calor se puede transferir a través de una frontera diatérmica."),RFV.push("V"),PFV.push("El calor no se puede transferir a través de una frontera adiabática."),RFV.push("V"),PFV.push("Es imposible la transferencia de calor a través de una frontera diatérmica."),RFV.push("F"),PFV.push("Es posible la transferencia de calor a través de una frontera adiabática."),RFV.push("F"),PFV.push("El calor se puede transferir a través de una frontera adiabática."),RFV.push("F"),PFV.push("El calor no se puede transferir a través de una frontera diatérmica."),RFV.push("F"),PFV.push("&emsp; R = 0.08206 <i>atm L / mol K</i>."),RFV.push("V"),PFV.push("&emsp; R = 8.314 <i>J / mol K</i>."),RFV.push("V"),PFV.push("&emsp; R = 1.987 <i>cal / mol K</i>."),RFV.push("V"),PFV.push("La energía se puede medir en <i>atm L</i>."),RFV.push("V"),PFV.push("La energía se puede medir en <i>Pa m<sup>3</sup></i>."),RFV.push("V"),PFV.push("La energía se puede medir en <i>J</i>."),RFV.push("V"),PFV.push("La energía se puede medir en <i>cal</i>."),RFV.push("V"),PFV.push("&emsp; 1 <i>cal</i> = 4.184 <i>J</i>."),RFV.push("V"),PFV.push("&emsp; 1 <i>atm L</i> = 101.325 <i>J</i>."),RFV.push("V"),PFV.push("La capacidad calorífica se puede medir en <i>J / °C</i>."),RFV.push("V"),PFV.push("El calor específico se puede medir en <i>J / g °C</i>."),RFV.push("V"),PFV.push("&emsp; R = 0.08206 <i>J / mol K</i>."),RFV.push("F"),PFV.push("&emsp; R = 8.314 <i>atm L / mol K</i>."),RFV.push("F"),PFV.push("&emsp; R = 0.8206 <i>atm L / mol K</i>."),RFV.push("F"),PFV.push("La energía se puede medir en <i>atm L<sup>3</sup></i>."),RFV.push("F"),PFV.push("La energía se puede medir en <i>Pa m<sup>2</sup></i>."),RFV.push("F"),PFV.push("La energía se puede medir en <i>J m<sup>3</sup></i>."),RFV.push("F"),PFV.push("La energía se puede medir en <i>cal m<sup>3</sup></i>."),RFV.push("F"),PFV.push("&emsp; 1 <i>cal</i> = 4184 <i>J</i>."),RFV.push("F"),PFV.push("&emsp; 1 <i>atm L</i> = 101325 <i>J</i>."),RFV.push("F"),PFV.push("El calor específico se puede medir en <i>J / °C</i>."),RFV.push("F"),PFV.push("La capacidad calorífica se puede medir en <i>J / g °C</i>."),RFV.push("F"),PFV.push("El trabajo se puede interpretar como el cambio directo de energía que resulta de un proceso."),RFV.push("V"),PFV.push("El calor es la transferencia de energía entre dos cuerpos que están a diferente temperatura."),RFV.push("V"),PFV.push("La energía de un sistema se puede interpretar como su capacidad para realizar un trabajo."),RFV.push("V"),PFV.push("Sólo existen dos formas de energía: la cinética y la potencial."),RFV.push("F"),PFV.push("El calor es la transferencia de energía entre dos cuerpos que están a la misma temperatura."),RFV.push("F"),PFV.push("La energía interna de un sistema es diferente a la energía total de dicho sistema."),RFV.push("F"),PFV.push("La energía total del universo permanece constante."),RFV.push("V"),PFV.push("Es posible convertir una forma de energía en otra."),RFV.push("V"),PFV.push("La energía no se puede crear."),RFV.push("V"),PFV.push("En un sistema aislado, la energía interna permanece constante."),RFV.push("V"),PFV.push("En un sistema aislado, el cambio en la energía interna es cero."),RFV.push("V"),PFV.push("La energía total del universo no es constante, siempre esta cambiando."),RFV.push("F"),PFV.push("Es imposible convertir una forma de energía en otra."),RFV.push("F"),PFV.push("Es posible crear energía mediante el calor."),RFV.push("F"),PFV.push("En un sistema aislado, la energía interna no permanece constante."),RFV.push("F"),PFV.push("En un sistema aislado, el cambio en la energía interna es diferente de cero."),RFV.push("F"),PFV.push("La energía interna es una función de estado."),RFV.push("V"),PFV.push("La entalpía es una función de estado."),RFV.push("V"),PFV.push("El trabajo es una función de trayectoria."),RFV.push("V"),PFV.push("El calor es una función de trayectoria."),RFV.push("V"),PFV.push("La energía interna es una función de trayectoria."),RFV.push("F"),PFV.push("La entalpía es una función de trayectoria."),RFV.push("F"),PFV.push("El trabajo es una función de estado."),RFV.push("F"),PFV.push("El calor es una función de estado."),RFV.push("F"),PFV.push("Un proceso isocórico es un proceso a volumen constante."),RFV.push("V"),PFV.push("Un proceso isobárico es un proceso a presión constante."),RFV.push("V"),PFV.push("Un proceso endotérmico absorbe energía."),RFV.push("V"),PFV.push("Un proceso exotérmico libera energía."),RFV.push("V"),PFV.push("Todos los procesos naturales son irreversibles."),RFV.push("V"),PFV.push("Un proceso a volumen constante no efectúa trabajo de expansión."),RFV.push("V"),PFV.push("La energía interna de un gas ideal permanece constante cuando es sometido a un proceso isotérmico."),RFV.push("V"),PFV.push("La entalpía de un gas ideal permanece constante cuando es sometido a un proceso isotérmico."),RFV.push("V"),PFV.push("La energía interna de un gas ideal depende sólo de la temperatura."),RFV.push("V"),PFV.push("La entalpía de un gas ideal depende sólo de la temperatura."),RFV.push("V"),PFV.push("Un proceso isocórico es un proceso a presión constante."),RFV.push("F"),PFV.push("Un proceso isobárico es un proceso a volumen constante."),RFV.push("F"),PFV.push("Un proceso endotérmico libera energía."),RFV.push("F"),PFV.push("Un proceso exotérmico absorbe energía."),RFV.push("F"),PFV.push("Todos los procesos naturales son reversibles."),RFV.push("F"),PFV.push("Un proceso a volumen constante efectúa trabajo de expansión."),RFV.push("F"),PFV.push("La energía interna de un gas ideal cambia cuando es sometido a un proceso isotérmico."),RFV.push("F"),PFV.push("La entalpía de un gas ideal cambia cuando es sometido a un proceso isotérmico."),RFV.push("F"),PFV.push("La energía interna de un gas ideal depende de al menos 2 variables."),RFV.push("F"),PFV.push("La entalpía de un gas ideal depende de al menos 2 variables."),RFV.push("F"),PFV.push("Si el trabajo es positivo: el trabajo se realizó sobre el sistema."),RFV.push("V"),PFV.push("Si el trabajo es negativo: el trabajo se realizó sobre los alrededores."),RFV.push("V"),PFV.push("Si el calor es positivo: el proceso es endotérmico."),RFV.push("V"),PFV.push("Si el calor es negativo: el proceso es exotérmico."),RFV.push("V"),PFV.push("Si el trabajo es negativo: el trabajo se realizó sobre el sistema."),RFV.push("F"),PFV.push("Si el trabajo es positivo: el trabajo se realizó sobre los alrededores."),RFV.push("F"),PFV.push("Si el calor es negativo: el proceso es endotérmico."),RFV.push("F"),PFV.push("Si el calor es positivo: el proceso es exotérmico."),RFV.push("F"),PFV.push("El calor específico es un propiedad intensiva."),RFV.push("V"),PFV.push("La capacidad calorífica es un propiedad extensiva."),RFV.push("V"),PFV.push("El calor específico es un propiedad extensiva."),RFV.push("F"),PFV.push("La capacidad calorífica es un propiedad intensiva."),RFV.push("F"),PFV.push("Si el cambio de entalpía es positivo: la reacción química absorbe energía."),RFV.push("V"),PFV.push("Si el cambio de entalpía es negativo: la reacción química libera energía."),RFV.push("V"),PFV.push("Si el cambio de entalpía es positivo: la reacción química es endotérmica."),RFV.push("V"),PFV.push("Si el cambio de entalpía es negativo: la reacción química es exotérmica."),RFV.push("V"),PFV.push("Si el cambio de entalpía es negativo: la reacción química absorbe energía."),RFV.push("F"),PFV.push("Si el cambio de entalpía es positivo: la reacción química libera energía."),RFV.push("F"),PFV.push("Si el cambio de entalpía es negativo: la reacción química es endotérmica."),RFV.push("F"),PFV.push("Si el cambio de entalpía es positivo: la reacción química es exotérmica."),RFV.push("F")),NT=PFV.length,C=[];for(var e=0;e<NT;e++)C[e]=1;"Falso & Verdadero"===Quiz&&seleccionar10preguntas()}function seleccionar10preguntas(){console.log("");for(var e=0;e<10;e++){var n;console.log("N10 ",e,N10);for(var s="no";"no"===s;)0===e?(n=aleatorio(0,NT-1),s="si"):(n=aleatorio(0,NT-1),!1===N10.includes(n)&&(s="si"));N10[e]=n}console.log("N10 ",N10)}function siguientePregunta(){"no"===juegoTerminado&&"si"===hayMasPreguntas()?("Falso & Verdadero"===Quiz&&preguntarFalsoVerdadero(),document.getElementById("Examen").innerHTML=0===i?"":Examen,i++):"Falso & Verdadero"===Quiz&&(x=document.getElementById("Pregunta"),x.style.display="block",x=document.getElementById("botonGris"),x.style.display="none",x=document.getElementById("Respuesta"),x.style.display="block",x=document.getElementById("enLosBotones"),x.style.display="block",x=document.getElementById("botonRojo"),x.style.display="none",x=document.getElementById("botonAzul"),x.style.display="none",document.getElementById("Respuesta").innerHTML="¡Fín del Juego!",document.getElementById("enLosBotones").innerHTML="Errores: "+fails,document.getElementById("Examen").innerHTML=Examen)}function preguntarFalsoVerdadero(){document.getElementById("Pregunta").style.display="block",document.getElementById("botonGris").style.display="none",document.getElementById("Respuesta").style.display="block",document.getElementById("enLosBotones").style.display="block",document.getElementById("botonRojo").style.display="inline",document.getElementById("botonAzul").style.display="inline",seleccionarPregunta(),document.getElementById("Pregunta").innerHTML="¿<red>Falso</red> o <blue>Verdadero</blue>?",document.getElementById("Respuesta").innerHTML=i+1+". "+PFV[N],document.getElementById("enLosBotones").innerHTML="Errores: "+fails,document.getElementById("botonRojo").innerHTML="F",document.getElementById("botonAzul").innerHTML="V",Examen+=i+1+". "+PFV[N],mostrado="no"}function preguntarEnOrden(){document.getElementById("Pregunta").style.display="block",document.getElementById("botonGris").style.display="block",document.getElementById("Respuesta").style.display="none",document.getElementById("enLosBotones").style.display="none",document.getElementById("botonRojo").style.display="none",document.getElementById("botonAzul").style.display="none",document.getElementById("enLosBotones").innerHTML="",document.getElementById("botonAzul").innerHTML="...",document.getElementById("botonRojo").innerHTML="...",document.getElementById("Respuesta").innerHTML="",i<NT?(document.getElementById("Pregunta").innerHTML="<red>"+R[i]+"</red>, <blue>"+P[i]+"</blue>",document.getElementById("botonGris").innerHTML="Siguiente"):(document.getElementById("Pregunta").innerHTML="¡Se terminó!",document.getElementById("botonGris").innerHTML="...",juegoTerminado="si")}function botonGris(){if(mostrado="si","no"===juegoTerminado&&"si"===hayMasPreguntas()){if("En Orden"===Quiz&&(siguientePregunta(),document.getElementById("botonAzul").innerHTML="...",document.getElementById("botonRojo").innerHTML="..."),"Quiz1"===Quiz)document.getElementById("Respuesta").style.display="block",document.getElementById("enLosBotones").style.display="block",document.getElementById("botonRojo").style.display="inline",document.getElementById("botonAzul").style.display="inline",document.getElementById("botonGris").innerHTML="Mostrar",document.getElementById("Respuesta").innerHTML="<red>"+R[N]+"</red>.",document.getElementById("enLosBotones").innerHTML="¿Acertaste?",document.getElementById("botonRojo").innerHTML="No",document.getElementById("botonAzul").innerHTML="Si";if("Quiz2"===Quiz)document.getElementById("Respuesta").style.display="block",document.getElementById("enLosBotones").style.display="block",document.getElementById("botonRojo").style.display="inline",document.getElementById("botonAzul").style.display="inline",document.getElementById("botonGris").innerHTML="Mostrar",document.getElementById("Respuesta").innerHTML="<blue>"+P[N]+"</blue>.",document.getElementById("enLosBotones").innerHTML="¿Acertaste?",document.getElementById("botonRojo").innerHTML="No",document.getElementById("botonAzul").innerHTML="Si";if("Quiz3"===Quiz)document.getElementById("Respuesta").style.display="block",document.getElementById("enLosBotones").style.display="block",document.getElementById("botonRojo").style.display="inline",document.getElementById("botonAzul").style.display="inline",document.getElementById("botonGris").innerHTML="Mostrar",1===opcionQuiz3?document.getElementById("Respuesta").innerHTML="<red>"+R[N]+"</red>.":document.getElementById("Respuesta").innerHTML="<blue>"+P[N]+"</blue>.",document.getElementById("enLosBotones").innerHTML="¿Acertaste?",document.getElementById("botonRojo").innerHTML="No",document.getElementById("botonAzul").innerHTML="Si"}else document.getElementById("enLosBotones").innerHTML="",document.getElementById("botonAzul").innerHTML="...",document.getElementById("botonRojo").innerHTML="...",document.getElementById("botonGris").innerHTML="...",document.getElementById("Respuesta").innerHTML="¡Fín del Juego!",document.getElementById("Pregunta").innerHTML="¡Fín del Juego!","QuizFV"===Quiz&&(document.getElementById("enLosBotones").innerHTML="Errores: "+fails)}function seleccionarPregunta(){"Falso & Verdadero"===Quiz&&(N=N10[i])}function hayMasPreguntas(){var e;if("Falso & Verdadero"===Quiz)i<10?e="si":(e="no",juegoTerminado="si");else{for(var n=0,s=0;s<C.length;s++)n+=C[s];0<n?e="si":(e="no",juegoTerminado="si")}return e}function botonRojo(){"Falso & Verdadero"===Quiz&&("F"===RFV[N]?(C[N]-=1,wins++,Examen+=" [F] &check;<br>"):(C[N]+=1,fails++,Examen+=" [F] &#10008;<br>"),siguientePregunta(),console.log(C))}function botonAzul(){"Falso & Verdadero"===Quiz&&("V"===RFV[N]?(C[N]-=1,wins++,Examen+=" [V] &check;<br>"):(C[N]+=1,fails++,Examen+=" [V] &#10008;<br>"),siguientePregunta(),console.log(C))}
