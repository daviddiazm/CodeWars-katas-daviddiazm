function findOutlier(integers) {
    const newIntengers = [...integers]
    let finalNumb
    let countPar = 0
    let countImpar = 0
    let arrIsPar = false

    for (let i = 0; i < integers.length; i++) {
        const element = newIntengers[i];
        if (element % 2 === 0) {
            countPar++
        } else {
            countImpar++
        }
    }

    if (countPar > countImpar) arrIsPar = true

    if (arrIsPar) finalNumb = newIntengers.filter((num, i, a) => {
        return num % 2 !== 0
    })
    else finalNumb = newIntengers.filter((num, i, a) => {
        return num % 2 === 0
    })

    return finalNumb[0]
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));// 11
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));// 160
console.log(findOutlier([1, 1, 0, 1, 1])); //0
console.log(findOutlier([0, 1, 2])); //1
console.log(findOutlier([1, 2, 3]));


/////////////////////// SOLUCIONES QUE ME GUSTARION

function findOutlier(int) {
    var even = int.filter(a => a % 2 == 0);
    var odd = int.filter(a => a % 2 !== 0);
    return even.length == 1 ? even[0] : odd[0];
}

//
function findOutlier(integers) {
    return integers.slice(0, 3).filter(even).length >= 2 ? integers.find(odd) : integers.find(even);
}
function even(num) {
    return (num % 2 == 0);
}
function odd(num) {
    return !even(num)
}

//
function findOutlier(integers) {
    const even = integers.filter(int => int % 2 === 0);
    const odd = integers.filter(int => int % 2 !== 0);
    return even.length === 1 ? even[0] : odd[0];
}