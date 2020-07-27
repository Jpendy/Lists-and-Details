import React from 'react';
import PropTypes from 'prop-types';

const List = ({ listArray }) => {

  const listElement = listArray.map(item => {
    return (
      <li key={Math.random()}>
        {item.name}
      </li>
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
