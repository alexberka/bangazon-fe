import { clientCredentials } from '../utils/client';

const ENDPOINT = clientCredentials.databaseURL;

const addToCart = (userId, productId) => new Promise((resolve, reject) => {
  fetch(`${ENDPOINT}/cart/${userId}/add/${productId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => resolve(response ? response.json() : {}))
    .catch(reject);
});

const removeFromCart = (userId, orderProductId) => new Promise((resolve, reject) => {
  fetch(`${ENDPOINT}/cart/${userId}/remove/${orderProductId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(reject);
});

export { addToCart, removeFromCart };
