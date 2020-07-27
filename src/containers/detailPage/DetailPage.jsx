import React, { useState, useEffect } from 'react';
import List from '../../components/list/List';
import { fetchCharacter } from '../../services/apiFetch';
import { useParams } from 'react-router-dom';

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
