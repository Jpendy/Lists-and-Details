import React from 'react';
import List from '../../components/list/List';
import './DetailPage.css';
import { useDetailPageSetup } from '../../hooks/detailPageSetupHook';

const DetailPage = () => {
  const { listArray } = useDetailPageSetup();

  return (
    <>
      <List listArray={listArray} />
    </>
  );
};

export default DetailPage;
