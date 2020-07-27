export const apiFetch = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=2000')
    .then(res => res.json());
};
