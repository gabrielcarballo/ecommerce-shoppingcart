const searchEndpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=';

const fetchProducts = async (search) => {
  if (search === undefined) { throw new Error('You must provide an url'); }
    const url = `${searchEndpoint}${search}`;
    const result = await fetch(url);
    const resultJSON = await result.json();
    return resultJSON.results;
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
