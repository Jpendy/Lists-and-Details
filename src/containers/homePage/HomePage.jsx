import React from 'react';
import List from '../../components/list/List';
import './HomePage.css';
import { usePageSetup } from '../../hooks/pageSetupHook';
import PageButtons from '../../components/pageButtons/PageButtons';

const HomePage = () => {
  // const [page, setPage] = useState();
  const { listArray, loading, page, handleClick } = usePageSetup();
  
  if(loading) return <h1>Loading</h1>;

  return (
    <>
      <PageButtons page={page} handleClick={handleClick} />
      <List listArray ={listArray} />
    </>
  );
};

export default HomePage;
