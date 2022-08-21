const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Testa se é lançado erro ao chamar a função saveCartItems sem parâmetros', () => {
    try {
      saveCartItems()
    } catch (error){
      expect(saveCartItems()).toEqual(new Error('Não há itens no carrinho!'))
    }
  });

  it('d', () => {
    const expected = saveCartItems('<ol><li>Item</li></ol>')
    expect(expected).toHaveBeenCalledWith('localStorage.setItem')
  })
});
