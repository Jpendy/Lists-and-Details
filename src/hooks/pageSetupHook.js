import { useState, useEffect } from 'react';
import { apiFetch } from '../services/apiFetch';
import { useLocation, useHistory } from 'react-router-dom';

export const usePageSetup = () => {
  const [listArray, setListArray] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [page, setPage] = useState(1);
  const history = useHistory();
  const location = useLocation();
  const page = Number((new URLSearchParams(location.search)).get('page') || 1);
 
  const handleClick = ({ target }) => {
    if(target.name === 'next') history.push(`?page=${page + 1}`);   //  setPage(page => page + 1);
    if(target.name === 'previous') history.push(`?page=${page - 1}`);   // setPage(page => page - 1);
  };

  useEffect(() => {
    setLoading(true);
    apiFetch(page)
      .then(listArray => setListArray(listArray))
      .finally(() => setLoading(false));
  }, [page]);

  

  return {
    listArray,
    loading,
    page,
    handleClick
  };
};
