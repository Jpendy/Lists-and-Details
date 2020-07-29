export const apiFetch = page => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?page=${page}`)
    .then(res => res.json());
};

export const fetchCharacter = name => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?name=${name}`)
    .then(res => res.json());
};
