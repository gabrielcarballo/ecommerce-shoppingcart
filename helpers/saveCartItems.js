const saveCartItems = (list) => {
  if (list === undefined) throw new Error('Não há itens no carrinho!')
  localStorage.setItem('cartItems', list);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
