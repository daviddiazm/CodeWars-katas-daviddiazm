
function isPrime(num) {
    
    if(num <= 1 ) {
        return false
    }

    let contador = 0

    for (let i = 1; i <= num; i++) {
        if(num % i == 0){
            contador ++
        }
    }

    return contador <= 2
}

console.log(
isPrime(73)

);


// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num <= 3) return true; // 2 e 3 são primos
  
//     if (num % 2 === 0 || num % 3 === 0) return false; // Divisível por 2 ou 3
  
//     for (let i = 5; i * i <= num; i += 6) {
//       if (num % i === 0 || num % (i + 2) === 0) return false;
//     }
  
//     return true;
//   }


// function isPrime(num) {
//     if (num < 2) {return false}
    
//     for ( let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {return false}
//     } return true
//   }
