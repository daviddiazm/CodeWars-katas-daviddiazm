function alphabetPosition(text) {
    const finalArray = []
    let finalString = ""
    const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const upperAbc = abc.map((letter) => letter.toUpperCase())

    const arrAbc = abc.map((letter, index) => {
        const indexInit1 = index + 1
        const mayus = upperAbc[index]
        return { letter, mayus, indexInit1 }
    })

    for (let i = 0; i < text.length; i++) {
        const letter = text[i];
        const exist = abc.includes(letter)
        const mayusExist = upperAbc.includes(letter)
        if (exist) {
            const index = abc.indexOf(letter)
            finalArray.push(index+1)
            // console.log(index);
        } else if (mayusExist) {
            const mayusIndex = upperAbc.indexOf(letter)
            finalArray.push(mayusIndex+1)
            // console.log(mayusIndex);
        }
    }
    // return finalArray.forEach((index) => index+1)
    const arrToString = finalArray.toString() 

    for (let j = 0; j < arrToString.length; j++) {
        if (arrToString[j] === ",") {
            finalString += " "
        } else {
            finalString += arrToString[j]
        }
    }

    // return arrToString
    // const finalString = arrToString.replace(","," ")
    return finalString
}


const text = "The sunset sets at twelve o' clock."
const text2 = "The sunset."
const text3 = "The,sunset,hola,amigos."

console.log(alphabetPosition(text2));


/////////////////////// SOLUCIONES QUE ME GUSTARION

function alphabetPosition(text) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return text.toLowerCase().split('')
    .filter( letter => {
        let index = alphabet.indexOf(letter);
        return index > -1;
    }  )
    .map( letter => alphabet.indexOf(letter) + 1 )
    .join(' ')
}