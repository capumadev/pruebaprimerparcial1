function filtrarPrimos(numeros) {
    const numerosPrimos = [];
    for (let i = 0; i < numeros.length; i++) {
        const numero = numeros[i];
        if (esPrimo(numero)) {
            numerosPrimos.push(numero);
        }
    }
    return numerosPrimos;
}
function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i * i <= numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

