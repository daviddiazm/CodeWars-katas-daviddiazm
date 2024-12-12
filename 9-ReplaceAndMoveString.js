
function pigIt(str){
    const regex = /[^a-zA-Z]/
    const arrStr = str.split(" ")

    const firstWordMove = arrStr.map((e) => {
        let stringMove = e
        if(regex.test(e)) {
            return e
        }
        stringMove = e.slice(1) + e[0] + "ay"
        return stringMove 
    })
    return firstWordMove.join(" ")
}

console.log(pigIt("Pig latin is cool"));
console.log(pigIt("col !"));