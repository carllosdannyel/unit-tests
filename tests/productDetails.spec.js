const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toEqual('function');
    // Teste se o retorno da função é um array.
    // Referencia: https://pt.stackoverflow.com/questions/77190/como-saber-se-um-objeto-%C3%A9-um-array-em-javascript-sem-jquery#:~:text=O%20m%C3%A9todo%20Array.,e%20false%20se%20n%C3%A3o%20%C3%A9. - O método Array.isArray() retorna true se um objeto é uma array, e false se não é.
    expect(Array.isArray(productDetails('Álcool gel', 'Máscara'))).toBe(true);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('Álcool gel', 'Máscara')).toHaveLength(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    const objects = productDetails('Álcool gel', 'Máscara');
    expect(typeof objects[0]).toEqual('object');
    expect(typeof objects[1]).toEqual('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(objects[0]).not.toBe(objects[1]);
    // Teste se os dois productIds terminam com 123.
    // Referencia: .toMatch(regexp | string) - Use .toMatch para verificar se uma string corresponde a uma expressão regular.
    expect(productDetails('Álcool gel', 'Máscara')[0].details.productId).toMatch(new RegExp('123'));
    expect(productDetails('Álcool gel', 'Máscara')[1].details.productId).toMatch(new RegExp('123'));
  });
});
