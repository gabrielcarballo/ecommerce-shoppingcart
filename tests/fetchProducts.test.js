require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Testa se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it('Testa se fetch foi chamada quando fetchProducts for invocada com computador como parâmetro', async () => {
    const search = 'computador'
    const searchEndpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${search}`
    await fetch(searchEndpoint)
    expect(fetch).toHaveBeenCalled();
  })
  it('Testa se o fetch está chamando a URL correta quando passado computador como parâmetro', async () => {
    const search = 'computador'
    const searchEndpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${search}`
    await fetchProducts('computador')
    expect(fetch).toBeCalledWith(searchEndpoint);
  });
  it('Teste se o dado retornado quando chamada a função fetchProducts passando computador está correta', async () => {
    const test = await fetchProducts('computador')
    expect(test).toEqual(computadorSearch)
  });
  it('Testa se retorna o erro: You must provide an url se chamada a função sem parâmetro', async () => {
    try {
      await fetchProducts()
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
  });
});
