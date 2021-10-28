// comece a criar a sua função add na linha abaixo
function add(operador1, operador2) {
    let soma = operador1 + operador2;

    return soma;
}
console.log(add(2, 4))
    // descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo

function multiply(operador3, operador4) {
    let produto = 0;
    for (let contador = 0; contador < operador4; contador++) {
        produto = add(produto, operador3);
    }
    return produto;
}
console.log(multiply(6, 8))
    // descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(operador5, operador6) {
    let potencia = 1;
    for (let contador = 0; contador < operador6; contador++) {
        potencia = multiply(potencia, operador5);
    }
    return potencia
}
console.log(power(3, 4));
// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(operador7) {
    let saida = 1;
    for (let contador = 1; contador <= operador7; contador++) {
        saida = multiply(saida, contador);
    }
    return saida
}
console.log(factorial(4));
// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(8) === 13, 'A função fibonacci não está funcionando como esperado');