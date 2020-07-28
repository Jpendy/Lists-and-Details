import { useState, useEffect } from 'react';
import { apiFetch } from '../services/apiFetch';

export const usePageSetup = () => {
  const [listArray, setListArray] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setLoading(true);
    apiFetch('https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=50')
      .then(listArray => setListArray(listArray))
      .finally(() => setLoading(false));
  }, []);

  return {
    listArray,
    loading
  };
};
