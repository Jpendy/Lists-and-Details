import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './List.css';

const List = ({ listArray }) => {

  const listElement = listArray.map(item => {
    return (
      <Link key={item._id} to={`/${item.name}`} >          
        <li className={styles.listItem} >
          <p className={styles.nameTag} >{item.name}</p>
          <img className={styles.image} src={item.photoUrl} />
        </li>
      </Link>
    );
  });
  
  return (
    <ul>
      { listElement }
    </ul>
  );
};

List.propTypes = {
  listArray: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default List;
