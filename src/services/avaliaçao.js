class ServicoCalculadora {
    Somar(num1, num2) {
        console.log('entrou na função')
        if(isNan(num1) || isNan(num2)) {
            throw new Error('O valor informado não é um número')
        }
        const resultado = num1 + num2

        return resultado
    }

    Subtrair(num1, num2) {
        if(isNan(num1) || isNan(num2)) {
            throw new Error('O valor informado não é um número')
        }
        const resultado = num1 - num2

        return resultado
    }

    Multiplicar(num1, num2) {
        if(isNan(num1) || isNan(num2)) {
            throw new Error('O valor informado não é um número')
        }
        const resultado = num1 * num2

        return resultado
    }

    Dividir(num1, num2) {
        if(isNan(num1) || isNan(num2)) {
            throw new Error('O valor informado não é um número')
        }
        const resultado = num1 / num2

        return resultado
    }

    Potencia(num1, num2) {
        if(isNan(num1) || isNan(num2)) {
            throw new Error('O valor informado não é um número')
        }
        const resultado = num1 ** num2

        return resultado
    }

    Raiz (num1) {
        if(isNan(num1)) {
            throw new Error('O valor informado não é um número')
        }
        const resultado = num1 ** 0.5

        return resultado
    }
}

module.exports = ServicoCalculadora