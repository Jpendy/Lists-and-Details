export const apiFetch = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=50')
    .then(res => res.json());
  // .then(res => ({
  //   name: res.name,
  //   image: res.photoUrl,
  // }));
};
