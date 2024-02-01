// function min(arr, toReturn) {
//   const info = {
//     value : 1,
//     index : 1
//   }
//   for (let i = 0; i < arr.length - 1; i++) {
//     if(arr[i]<arr[i+1]) {
//       info.index = i; 
//       info.value = arr[i]
//     } 
//   }
//   (toReturn == "index") ? info.index : info.value 
// }


// function min(arr, toReturn) {
//   const findIndex = () => {
//     let min = arr[0]
//     let index
//     for (let i = 0; i < arr.length; i++) {
//       for (let i = 0; i < arr.length; i++) {
//         if(min >= arr[i]) {
//           min = arr[i]
//           index = i
//         }
//       }
//       return index
//     }
//   }

//   const findValue = () => {
//     const newArr = arr.sort()
//     return newArr[0]
//   }
//   return ((toReturn == "index") ? findIndex() : findValue() )
// }

function min(arr, toReturn) {
  const findIndex = () => {
    const num = Math.min(...arr)
    return arr.lastIndexOf(num)
  }

  const findValue = () => {
    return Math.min(...arr)
  }
  return ((toReturn == "index") ? findIndex() : findValue() )
}


console.log('value = ',min([1,2,3,4,5], 'value'));
console.log('index = ',min([1,2,3,4,5], 'index'));


/////////////////////// SOLUCIONES QUE ME GUSTARION

// function min(arr, toReturn) {
//   var val = Math.min.apply(null, arr)
//   return toReturn == 'value' ? val : arr.indexOf(val)
// }


