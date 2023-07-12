var uniqueInOrder = function (iterable) {
    let arrFinal = []
    const newIterable = [...iterable]

    arrFinal = newIterable
        .filter((character, index, array) => {
            return character !== array[index + 1]
        })


    // primera resolucion:

    // for (let i = 0; i < iterable.length; i++) {
    //     const character = iterable[i];
    //     if(character !== iterable[i+1]) {
    //         arrFinal.push(character)
    //     }
    // }

    return arrFinal
}



console.log(uniqueInOrder('AAAABBBCCDAABBB')); //== ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD')); //        == ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1, 2, 2, 3, 3]));//       == [1,2,3]


/////////////////////// SOLUCIONES QUE ME GUSTARION

var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}

var uniqueInOrder = function (iterable){
	return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
}

const uniqueInOrder = d => [...d].filter((x, i, a) => x != a[i + 1])