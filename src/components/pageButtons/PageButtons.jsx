import React from 'react';
import PropTypes from 'prop-types';
import styles from './PageButtons.css';

const PageButtons = ({ page, handleClick }) => (
  
  <section className={styles.buttonSection} >
    {page > 1 && <button name='previous' onClick={handleClick} >Previous</button>}
    {page < 25 && <button name='next' onClick={handleClick}>Next</button>}
  </section>
  
);

PageButtons.propTypes = {
  page: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default PageButtons;

