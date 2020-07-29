import React from 'react';
import './DetailPage.css';
import styles from './DetailPage.css';

import { useDetailPageSetup } from '../../hooks/detailPageSetupHook';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { name } = useParams();
  const { listArray } = useDetailPageSetup(name);

  const listElement = listArray.map(item => {
    return (
      <li key={item._id} >
        <p className={styles.name} >{item.name}</p>
        <img className={styles.detailImage}  src={item.photoUrl} />
        <p>Allies: {item.allies}</p>
        <p>Enemies: {item.enemies}</p>
        {item.affiliation && <p>Affiliation: {item.affiliation}</p>}
      </li>
    );
  });

  return (
    <>
      <ul className={styles.detailPageList} >
        {listElement}
      </ul>
    </>
  );
};

export default DetailPage;
