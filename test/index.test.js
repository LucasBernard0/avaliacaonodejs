const { describe, expect, it } = require("@jest/globals");
const ServicoCalculadora = require("../src/services/avaliacao");

describe("Testes do primeiro exercício", () => {
  const servico = new ServicoCalculadora();

  // Somar

  it("Should sum two numbers", () => {
    const result = servico.Somar(5, 5);

    expect(result).toBe(10);
  });

  it("Should error", () => {
    const result = () => servico.Somar(5, "a");
    console.log("AQUIIIII");

    expect(result).toThrowError("O valor informado não é um número");
  });

  it("Should error", () => {
    const result = () => servico.Somar("a", 5);
    console.log("AQUIIIII");

    expect(result).toThrowError("O valor informado não é um número");
  });
  // Subtrair

  it("Should subtract two numbers", () => {
    const result = servico.Subtrair(5, 5);

    expect(result).toBe(0);
  });

  it("Should error", () => {
    const result = () => servico.Subtrair("a", 5);
    console.log("AQUIIIII");

    expect(result).toThrowError("O valor informado não é um número");
  });

  it("Should error", () => {
    const result = () => servico.Subtrair(5, "a");
    console.log("AQUIIIII");

    expect(result).toThrowError("O valor informado não é um número");
  });

  // Multiplicar

  it("Should multiply two numbers", () => {
    const result = servico.Multiplicar(5, 5);

    expect(result).toBe(25);
  });

  it("Should error", () => {
    const result = () => servico.Multiplicar("c", 5);
    console.log("AQUIIIII");

    expect(result).toThrowError("O valor informado não é um número");
  });

  it("Should error", () => {
    const result = () => servico.Multiplicar(5, "c");
    console.log("AQUIIIII");

    expect(result).toThrowError("O valor informado não é um número");
  });

  // Dividir

  it('Should divide two numbers', () => {
      const result = servico.Dividir(5, 5)

          expect(result).toBe(1);
      })

      it ('Should error', () => {
          const result = () => servico.Dividir(5, "P")
          console.log('AQUIIIII')

          expect(result).toThrowError("O valor informado não é um número");
      })

      it ('Should error', () => {
          const result = () => servico.Dividir("P", 5)
          console.log('AQUIIIII')

          expect(result).toThrowError("O valor informado não é um número");
      })
});
