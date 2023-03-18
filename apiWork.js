const url = 'http://app:3000/graphql';

const makeRequest = (query, key) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': 'http://app:3000/',

      'auth': 'Bearer ' + key,
    },
    body: query,
  }).then(res => res.json());
};