import { clientCredentials } from '../utils/client';

const ENDPOINT = clientCredentials.databaseURL;

const getAllCategories = () => new Promise((resolve, reject) => {
  fetch(`${ENDPOINT}/categories`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export default getAllCategories;
