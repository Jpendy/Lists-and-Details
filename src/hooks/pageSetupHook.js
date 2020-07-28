import { useState, useEffect } from 'react';
import { apiFetch } from '../services/apiFetch';

export const usePageSetup = () => {
  const [listArray, setListArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
 
  useEffect(() => {
    setLoading(true);
    apiFetch(page)
      .then(listArray => setListArray(listArray))
      .finally(() => setLoading(false));
  }, [page]);

  // useEffect(() => {
  //   apiFetch(page)
  //     .then(listArray => setListArray(listArray));
  // }, [page]);

  const handleClick = ({ target }) => {
    if(target.name === 'next') setPage(page => page + 1);
    if(target.name === 'previous') setPage(page => page - 1);
  };

  return {
    listArray,
    loading,
    page,
    handleClick
  };
};
