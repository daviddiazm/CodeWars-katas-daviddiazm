function seaSick(x){
  let counter = 0;
  for (let i = 0; i < x.length-1; i++) {
    const eActual = x[i] 
    const eSiguiente = x[i+1] 
    if(eActual !== eSiguiente) counter++;
  }
  let porcentaje = ((counter*100)/x.length)
  porcentaje = Math.abs(porcentaje)
  // console.log('',{porcentaje, counter});
  // aun no esta completado 
  // https://www.codewars.com/kata/57e90bcc97a0592126000064/train/javascript
  if(porcentaje > 20) return "Throw Up"
  else return "No Problem"
}
console.log('',seaSick("_~~~~~~~_~__~______~~__~~_~~"));
console.log('',seaSick("~"));
console.log('',seaSick("__"));
console.log('',seaSick("______~___~_"));

/////////////////////// SOLUCIONES QUE ME GUSTARION

/////////////////////// SOLUCIONES QUE ME GUSTARION
function seaSick(x){
  var count = 0;
  
  x.split('').reduce(function(first, second) {
    first != second ? ++count : count;
    return second;
  });
  
  if ((count / x.length) * 100 > 20) {
    return "Throw Up";
  }
  
  return "No Problem";
}


function seaSick(x){
  var a = x.split("_~").length-1
  var b = x.split("~_").length-1
  return (a+b)/x.length>0.2?"Throw Up":"No Problem"
}


