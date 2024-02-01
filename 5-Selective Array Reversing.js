// function selReverse(array, length) {
//   const numDiv = array / length;
//   let start = 0;
//   // length += length;
//   // const containaerArray = array.slice(0, length).reverse()
//   const containaerArray = []
//   let i = 0
//   do {
//     const miniArr = array.slice(start, length).reverse(); 
//     console.log('',miniArr);
//     containaerArray.push(miniArr);
//     start = length;
//     length += length
//     i++
//   } while (i <= numDiv);

//   return containaerArray
// }


// function selReverse(array, length) {
//   const numMod = array.length % length;
//   const containerArr = [];
//   const finalArr = [];
//   let start = 0;
//   for (let i = length; i <= array.length; i+=length) {
//     const miniArr = array.slice(start, i).reverse()
//     containerArr.push(miniArr)
//     start = i
//   }
//   if(numMod) {
//     const miniArr = array.slice(array.length - numMod, array.length).reverse()
//     containerArr.push(miniArr)
//   }
//   for (let i = 0; i < containerArr.length; i++) 
//     {for (let j = 0; j < containerArr[i].length; j++) {
//     finalArr.push(containerArr[i][j])
//     }
//   }
//   return finalArr
// }



function selReverse(array, length) {
  const containerArr = [];  
  let start = 0;
  for (let i = length; i <= array.length; i += length) {
    containerArr.push(array.slice(start, i).reverse());
    start = i;
  }
  if(array.length % length) {
    containerArr.push(array.slice(array.length - array.length % length, array.length).reverse())
  }
  return [].concat(...containerArr);
}

// creo que esta terminado pero necesito mejor internet porque dice que mi codigo se demora mucho en ejecutarse


console.log(selReverse([1,2,3,4,5,6], 2));
console.log(selReverse([2,4,6,8,10,12,14,16], 3));
console.log(selReverse([1,2,3,4,5,6], 10,));


// selReverse([1,2,3,4,5,6], 2)
 //=> [2,1, 4,3, 6,5]
// selReverse([2,4,6,8,10,12,14,16], 3)
 //=> [6,4,2, 12,10,8, 16,14] 

//  https://www.codewars.com/kata/58f6000bc0ec6451960000fd/train/javascript
