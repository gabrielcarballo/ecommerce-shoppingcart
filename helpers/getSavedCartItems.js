const getSavedCartItems = () => {
  const cartlist = document.querySelector('.cart__items');
  cartlist.innerHTML = localStorage.getItem('cartItems');
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
