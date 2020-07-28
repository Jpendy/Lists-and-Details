import React from 'react';
import PropTypes from 'prop-types';

const PageButtons = ({ page, handleClick }) => (
  <>
    {page < 25 && <button name='next' onClick={handleClick}>Next</button>}
    {page > 1 && <button name='previous' onClick={handleClick} >Previous</button>}
  </>
);

PageButtons.propTypes = {
  page: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default PageButtons;

