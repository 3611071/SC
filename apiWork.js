const url = 'http://app:3000/graphql';

const makeRequest = (query, key) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'authorization': 'Bearer ' + key,
    },
    body: JSON.stringify({ query: query }),
  }).then(res => res.json());
};