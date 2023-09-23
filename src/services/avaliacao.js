class ServicoCalculadora {
  Somar(num1, num2) {
    console.log("entrou na função");
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("O valor informado não é um número");
    }
    const resultado = num1 + num2;

    return resultado;
  }

  Subtrair(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("O valor informado não é um número");
    }
    const resultado = num1 - num2;

    return resultado;
  }

  Multiplicar(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("O valor informado não é um número");
    }
    const resultado = num1 * num2;

    return resultado;
  }

  Dividir(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("O valor informado não é um número");
    }
    const resultado = num1 / num2;

    return resultado;
  }

  Potencia(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("O valor informado não é um número");
    }

    Math.pow(num1, num2);
    const resultado = num1 ** num2;

    return resultado;
  }

  Raiz(num1) {
    if (isNaN(num1)) {
      throw new Error("O valor informado não é um número");
    }
    Math.sqrt(num1);
    const resultado = num1 ** 0.5;

    return resultado;
  }
}

module.exports = ServicoCalculadora;
