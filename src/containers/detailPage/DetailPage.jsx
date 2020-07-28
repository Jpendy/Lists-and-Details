import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import List from '../../components/list/List';
import { fetchCharacter } from '../../services/apiFetch';
import './DetailPage.css';

const DetailPage = () => {

  const [listArray, setListArray] = useState([]);
  const { name } = useParams();
  
  useEffect(() => {
    fetchCharacter(name)
      .then((listArray) => setListArray(listArray));
  }, []);

  return (
    <>
      <List listArray={listArray} />
    </>
  );
};

export default DetailPage;
