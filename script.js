const place = document.querySelector('.items');
const cartList = document.querySelector('.cart__items');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const initialLoadingData = () => fetchProducts('computador').then((initialData) => {
  initialData.forEach(((data) => {
    const { id: sku, title: name, thumbnail: image } = data;
    place.appendChild(createProductItemElement({ sku, name, image }));
  }));
});

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  console.log('evento ta aqui');
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const getProductInfo = async (e) => {
  clickID = e.target.parentNode.childNodes[0].innerText;
  const info = await fetchItem(clickID);
  const infotest = ({ sku: info.id, name: info.title, salePrice: info.price });
  const appendItem = createCartItemElement(infotest);
  cartList.appendChild(appendItem);
};

const addItemCartEvent = async () => {
  const e = document.querySelectorAll('.item__add');
  e.forEach((element) => {
    element.addEventListener('click', getProductInfo);
  });
}; 

window.onload = async () => {
await initialLoadingData();
addItemCartEvent();
};
