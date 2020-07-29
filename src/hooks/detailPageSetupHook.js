import { useState, useEffect } from 'react';
import { fetchCharacter } from '../services/apiFetch';

export const useDetailPageSetup = (name) => {
  const [listArray, setListArray] = useState([]);
    
  useEffect(() => {
    fetchCharacter(name)
      .then((listArray) => setListArray(listArray));
  }, []);
  
  return {
    listArray
  };
};
