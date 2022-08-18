
const searchProductEndpoint = 'https://api.mercadolibre.com/items/';
/* const returnProductSearchEndpoint = async (search) => {
  try {
    const url = `${searchProductEndpoint}${search}`;
    const result = await fetch(url);
    const resultJSON = await result.json();
    return resultJSON;
  } catch (error) {
    return error;
  }
};
returnProductSearchEndpoint('computador'); */




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

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  // coloque seu código aqui
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

fetchProducts('computador').then((initialData) => {
  initialData.map((element) => ({
    sku :element.id,
    name : element.title,
    image : element.thumbnail,
}), {})
  const place = document.querySelector('.items')
  place.appendChild(createProductItemElement(element))
})

window.onload = () => {};
 
