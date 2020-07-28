import React from 'react';
import List from '../../components/list/List';
import './HomePage.css';
import { usePageSetup } from '../../hooks/pageSetupHook';

const HomePage = () => {
  // const [page, setPage] = useState();
  const { listArray, loading, page, handleClick } = usePageSetup();
  
  if(loading) return <h1>Loading</h1>;

  return (
    <>
      { page < 25 && <button name='next' onClick={handleClick}>Next</button> }
      {page > 1 && <button name='previous' onClick={handleClick} >Previous</button>} 
      <List listArray ={listArray} />
    </>
  );
};

export default HomePage;
