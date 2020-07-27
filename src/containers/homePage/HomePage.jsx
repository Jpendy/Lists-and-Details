import React, { useState, useEffect } from 'react';
import List from '../../components/list/List';
import { apiFetch } from '../../services/apiFetch';

const HomePage = () => {
  const [listArray, setListArray] = useState([]);


  useEffect(() => {
    apiFetch()
      .then((listArray) => setListArray(listArray));
  }, []);

  console.log(listArray);
  return (
    <>
    hello
      <List listArray ={listArray} />
    </> 
  );
};

export default HomePage;
