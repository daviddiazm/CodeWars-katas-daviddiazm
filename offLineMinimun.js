// function OffLineMinimum(strArr) {
//     // ["5", "4", "6", "E", "1", "7", "E", "E", "3", "2"]
//     const cola = [];
//     const colaMinimos = [];
//     const resultados = [];
//     for (const elemento of strArr) {
//         if (elemento !== "E") {
//             const num = parseInt(elemento);
//             cola.push(num);
//             colaMinimos.push(num);
//             colaMinimos.sort();
//         } else {
//             if (colaMinimos.length > 0) {
//                 const minimo = colaMinimos.shift();
//                 resultados.push(minimo);
//                 const indice = cola.indexOf(minimo);
//                 // if (indice !== -1) {
//                 //     cola.splice(indice, 1);
//                 // }
//             }
//         }
//     }

//     return resultados.join(",");
// }
function OffLineMinimum(strArr) {
    const colaMinimos = [];
    const resultados = [];

    for (let i = 0; i < strArr.length; i++) {
        const item = strArr[i];
        if(item !== "E") {
            colaMinimos.push(item)
            colaMinimos.sort()
        } else {
            resultados.push(colaMinimos.shift())
        }
    }

    return resultados.join(",");
}

// Ejemplo de uso
console.log(OffLineMinimum(["5", "4", "6", "E", "1", "7", "E", "E", "3", "2"]));
// console.log(OffLineMinimum(["E", "3", "2"]));