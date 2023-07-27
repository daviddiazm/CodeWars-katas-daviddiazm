
// function rgb(r, g, b) {
//     const hexTable = { 10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F", }
//     let hexValue = ""
//     const newArryRGB = [r, g, b]
//     const arrRgbToHex = newArryRGB.map((rgbValue) => {
//         let divisionNm = rgbValue
//         let arrGroup = []
//         if (divisionNm <= 0) {
//             arrGroup.unshift(0)
//             return arrGroup
//         } else if (divisionNm >= 255) {
//             arrGroup.unshift(15, 15)
//             return arrGroup
//         } else {
//             while (divisionNm > 0) {
//                 const numDiv16 = Math.floor(divisionNm / 16)
//                 const modOfResult = Math.floor(divisionNm % 16)
//                 divisionNm = numDiv16
//                 arrGroup.unshift(modOfResult)
//             }
//             return arrGroup
//         }
//     })

//     let arr = []
//     for (let i = 0; i < arrRgbToHex.length; i++) {
//         const group = arrRgbToHex[i];
//         for (let j = 0; j < group.length; j++) {
//             const element = group[j];
//             arr.push(element)
//         }
//     }

//     ///////////// o /////////////

//     // let arr = []

//     // for (let i = 0; i < newArryRGB.length; i++) {
//     //     const element = newArryRGB[i];
//     //     let divisionNm = element
//     //     for (let j = 0; j < 2; j++) {
//     //         const numDiv16 = Math.floor(divisionNm / 16)
//     //         const modOfResult = Math.floor(divisionNm % 16)
//     //         divisionNm = numDiv16
//     //         arr.push(modOfResult)
//     //     }
//     // }

//     //////////// se puede dejar lo que esta aqui abajo

//     const finalArr = arr.map((num) => {
//         if (num > 9 && num <= 15) {
//             return hexTable[num]
//         } else if (num <= 0) {
//             return "0"
//         } else {
//             return num
//         }
//     })

//     return finalArr.join("")
//     // let resfinal = finalArr.join("")
//     // return { arrRgbToHex, arr, finalArr, resfinal }
//}

/// segundo intento

function rgbPrueba(num) {
    const numDiv16 = Math.floor(num / 16)
    const resto = Math.floor(num % 16)
    return [numDiv16, resto]
}

function rgb(r, g, b) {
    const hexTable = { 10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F", }
    const newArryRGB = [r, g, b]
    const arrayRGBfilter = newArryRGB.map((num) => {
        if (num > 255) return 255
        if (num <= 0) return 0
        else return num
    })

    function transGroup(num) {
        const numDiv16 = Math.floor(num / 16)
        const resto = Math.floor(num % 16)
        return [numDiv16, resto]
    }

    const arrRgbToHex = arrayRGBfilter.map((num) => {
        return transGroup(num)
    })

    let arrNumHex = []
    for (let i = 0; i < arrRgbToHex.length; i++) {
        for (let j = 0; j < arrRgbToHex[i].length; j++) {
            const element = arrRgbToHex[i][j];
            arrNumHex.push(element)
        }
    }

    const finalArr = arrNumHex.map((num) => {
        if (num > 9 && num <= 15) return hexTable[num]
        else return num
    })

    return finalArr.join("")
}

// console.log(rgbPrueba(0));
// console.log(rgbPrueba(100));
// console.log(rgbPrueba(255));
// console.log(rgbPrueba(355));
// console.log(rgbPrueba(-10));

console.log(rgb(0, 0, 0), '000000');
console.log(rgb(0, 0, -20), '000000');
console.log(rgb(300, 255, 255), 'FFFFFF');
console.log(rgb(173, 255, 47), 'ADFF2F');
console.log(rgb(255, 100, 22), 'FF6416');
console.log(rgb(148, 0, 211), "9400D3");
console.log(rgb(98, 176, 192), '62B0C0');


/////////////////////// SOLUCIONES QUE ME GUSTARION

function rgb(r, g, b){
	return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}