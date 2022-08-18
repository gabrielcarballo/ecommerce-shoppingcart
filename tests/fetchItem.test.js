require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Teste se a fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function')
  });

  it('Teste se a função fetchItem executa a função fetch quando invocada', async () => {
   await fetchItem('MLB1615760527');
   expect(fetch).toHaveBeenCalled();
  });

  it('Testa se o retorno de fetchItem é a estrutura do objeto esperado', async () => {
    expect(await fetchItem('MLB1615760527')).toEqual(item);
  })
});
