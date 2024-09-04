import { clientCredentials } from '../utils/client';

const ENDPOINT = clientCredentials.databaseURL;

const getUserCart = (userId) => new Promise((resolve, reject) => {
  fetch(`${ENDPOINT}/user/${userId}/cart`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((resp) => {
      if (resp) {
        resolve(resp.json());
      } else {
        resolve({});
      }
    })
    .then(resolve)
    .catch(reject);
});

const getPastUserOrders = (userId) => new Promise((resolve, reject) => {
  fetch(`${ENDPOINT}/user/${userId}/orders`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data ? Object.values(data) : []))
    .catch(reject);
});

const getSingleUserOrder = (orderId) => new Promise((resolve, reject) => {
  fetch(`${ENDPOINT}/user/orders/${orderId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((resp) => {
      if (resp) {
        resolve(resp.json());
      } else {
        resolve({});
      }
    })
    .then(resolve)
    .catch(reject);
});

const checkoutCart = (orderId, payload) => new Promise((resolve, reject) => {
  fetch(`${ENDPOINT}/checkout/${orderId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((resp) => resolve(resp.json()))
    .catch(reject);
});

export {
  getUserCart,
  getPastUserOrders,
  getSingleUserOrder,
  checkoutCart,
};
