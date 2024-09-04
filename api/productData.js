import { clientCredentials } from '../utils/client';

const ENDPOINT = clientCredentials.databaseURL;

const getAllProducts = () => new Promise((resolve, reject) => {
  fetch(`${ENDPOINT}/products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data ? Object.values(data) : []))
    .catch(reject);
});

const getTopProducts = () => new Promise((resolve, reject) => {
  fetch(`${ENDPOINT}/products/top`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data ? Object.values(data) : []))
    .catch(reject);
});

const getSingleProduct = (id) => new Promise((resolve, reject) => {
  fetch(`${ENDPOINT}/products/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((resp) => resp.json())
    .then(resolve)
    .catch(reject);
});

export {
  getAllProducts,
  getTopProducts,
  getSingleProduct,
};
