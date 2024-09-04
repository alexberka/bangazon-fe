import { clientCredentials } from '../utils/client';

const ENDPOINT = clientCredentials.databaseURL;

const getAllSellers = () => new Promise((resolve, reject) => {
  fetch(`${ENDPOINT}/sellers`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data ? Object.values(data) : []))
    .catch(reject);
});

const getSingleSeller = (id) => new Promise((resolve, reject) => {
  fetch(`${ENDPOINT}/sellers/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getUserProfile = (uid) => new Promise((resolve, reject) => {
  fetch(`${ENDPOINT}/user/${uid}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export {
  getAllSellers,
  getSingleSeller,
  getUserProfile,
};
