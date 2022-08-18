const fetchItem = async (id) => {
const itemEndpoint = `https://api.mercadolibre.com/items/${id}`;
if (id === undefined) { throw new Error('You must provide an url'); }
const result = await fetch(itemEndpoint);
const data = await result.json();
return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
