import { useState, useEffect } from 'react';
import { fetchCharacter } from '../services/apiFetch';
import { useParams } from 'react-router-dom';

export const useDetailPageSetup = () => {
  const [listArray, setListArray] = useState([]);
  const { name } = useParams();
    
  useEffect(() => {
    fetchCharacter(name)
      .then((listArray) => setListArray(listArray));
  }, []);
  
  return {
    listArray
  };
};
