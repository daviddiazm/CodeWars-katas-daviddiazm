function digitize(n) {
  return n.toString().split('').reverse().map((e)=> parseInt(e));
}

console.log('',digitize(35231));

/////////////////////// SOLUCIONES QUE ME GUSTARION
// function digitize(n) {
//   return String(n).split('').map(Number).reverse()
// }