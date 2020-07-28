import React from 'react';
import List from '../../components/list/List';
import './HomePage.css';
import { usePageSetup } from '../../hooks/pageSetupHook';

const HomePage = () => {
  const { listArray, loading } = usePageSetup();

  if(loading) return <h1>Loading</h1>;

  return (
    <List listArray ={listArray} />
  );
};

export default HomePage;
