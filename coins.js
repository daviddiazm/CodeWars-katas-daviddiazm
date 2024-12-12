function obtenerCombinaciones(cantidad) {
    //infiero que estas son las denominaciones porque puede estas pueden no seguir un patron en especifico
    let denomicaciones =[]
    if(cantidad < 60 ) {
        denomicaciones = [1, 5, 10, 25, 50]
        denomicaciones.sort((a,b) => b-a)
    } else {
        denomicaciones = [100, 200, 500, 1000 ]
    }

    let devueltas = []

    let restante = cantidad
    let posDenominaciones = 0

    for (let i = 0; i < denomicaciones.length; i++) {
        const element = denomicaciones[i];
        if(element >= cantidad) {
            posDenominaciones = i
            break
        }
    }

    for (let i = 0; i < denomicaciones.length; i++) {
        const moneda = denomicaciones[i];
        if(moneda <= restante) {
            let cantidadMonedas = Math.floor( restante / moneda);
            for (let j = 1; j <= cantidadMonedas; j++) {
                devueltas.push(moneda)
            }
            restante -= cantidadMonedas * moneda;
        }
    }


    return devueltas
}


console.log(obtenerCombinaciones(45));
