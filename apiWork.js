const url = 'http://localhost/graphql/';

const makeRequest = (query, key) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',

      'authorization': 'Bearer ' + key,
    },
    body: query,
  }).then(res => res.json());
};