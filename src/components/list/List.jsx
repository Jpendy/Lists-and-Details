import React from 'react';

const List = listArray => {

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

export default List;
