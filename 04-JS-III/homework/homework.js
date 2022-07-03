// No cambies los nombres de las funciones.

const { join } = require("@11ty/eleventy/src/TemplatePath");
const parseLinkDestination = require("markdown-it/lib/helpers/parse_link_destination");

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
return array.shift();
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array.pop();
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (let i=0;i<array.length;i++) {
    array[i]=array[i]+1;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
array.push(elemento);
return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
array.unshift(elemento);
return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var A='';
while (palabras.length>0) {
  if (palabras.length!=1) {
    A=A+palabras.shift()+' ';
} else 
     A=A+palabras.shift();
  }
  return A
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (let i=0;i<=array.length;i++) {
      if (array[i]==elemento){
        return true;
      } else 
      return false;
  }
  }
  
function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var A=0;
  for (let i=0;i<numeros.length;i++) {
    A=A+numeros[i];
}
return A;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
var s=0;
  for (let i=0;i<resultadosTest.length;i++) {
    s=s+resultadosTest[i];
}
return s/resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
var A=0;
var B=0;
for (let i=0;i<numeros.length;i++) {
  if (numeros[i]<numeros[i+1]){
    A=numeros[i+1];
    if(B<A) {
      B=A;
    } else 
      B=B;
  } else
  A=numeros[i];
}
return B;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let total=1;
  let i=0;
  if(arguments.length===0){
    total=0;
  } else 
  while(i<arguments.length){
    total=total*arguments[i];
    i++; 
  }
  return total; 
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
var A=0;
for (let i=0;i<arreglo.length;i++){
  if(arreglo[i]>18) {
    A=A+1;
  } else 
  A=A;
}
return A;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia===1||numeroDeDia===7) {
    return 'Es fin de semana';
  } else 
  return 'Es dia Laboral';
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var a=10;
  var b=1;
  while (a>1) {
    a=n/b;
    if (a<1){
      if(a*10-(a*10-Math.floor(a*10))===9) {
        return true;
      } else 
      return false;
    } else
    b=b*10;
  }
  }  
  


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var a=0;
  for (let i=0;i<arreglo.length-1;i++){
    a=arreglo[i];
    if (a===arreglo[i+1]) {
      a=arreglo[i+1];
    } else 
    return false;
  }
  if (a===arreglo.pop()){
    return true;
  }
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  a=[]
  for (let i=0;i<array.length;i++){
    if (array[i]=='Enero'||array[i]=='Marzo'||array[i]=='Noviembre') {
      a.push(array[i]);
    }
  }
  if (a.length!==3){
    return 'No se encontraron los meses pedidos'; 
    } else
    return a;
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  a=[]
  for (let i=0;i<array.length;i++){
    if (array[i]>100) {
      a.push(array[i]);
    }
  }
return a;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  a=[]
  for(let i=1;i<11;i++){
    numero=numero+2;
    a.push(numero);
    if (i===numero){
    return 'Se interrumpió la ejecución'
    break;
    }
  }
  return a;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  a=[]
  for(let i=1;i<11;i++){
    if(i!==5){
      numero=numero+2;
      a.push(numero);  
    } else 
    continue;
  }
  return a;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
