const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Testa se é lançado erro ao chamar a função saveCartItems sem parâmetros', () => {
    try {
      saveCartItems()
    } catch (error) {
      expect(error).toEqual(new Error('Não há itens no carrinho!'))
    }
  });

  it('Testa se o Local Storage é setado com o valor passado por parâmetro', () => {
    saveCartItems('<ol><li>Item</li></ol>')
    expect(localStorage.setItem).toBeCalled()
  });

  it('Testa se  o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro cartItems e o segundo sendo o valor passado como argumento para saveCartItems', () => {
    saveCartItems('<ol><li>Item</li></ol>')
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>')
  })
});
