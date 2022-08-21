const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Teste se método getItem é chamado ao invocar a função getSavedItems', () => {
    getSavedCartItems()
    expect(localStorage.getItem).toBeCalled();
  });

  it('d', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalledWith('cartItems')
  })
});
