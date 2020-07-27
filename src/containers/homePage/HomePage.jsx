import React, { useState, useEffect } from 'react';
import List from '../../components/list/List';
import { apiFetch } from '../../services/apiFetch';

const HomePage = () => {
  const [listArray, setListArray] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    apiFetch()
      .then((listArray) => setListArray(listArray))
      .finally(() => setLoading(false));
  }, []);

  if(loading) return <h1>Loading</h1>;

  return (
    <>
      <List listArray ={listArray} />
    </> 
  );
};

export default HomePage;
