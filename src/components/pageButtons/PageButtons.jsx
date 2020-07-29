import React from 'react';
import PropTypes from 'prop-types';
import styles from './PageButtons.css';

const PageButtons = ({ page, handleClick }) => (
  
  <section className={styles.buttonSection} >
    <button disabled={page === 1} name='previous' onClick={handleClick} >Previous</button>
    <span>{page}/25</span>
    <button disabled={page === 25} name='next' onClick={handleClick}>Next</button>
  </section>
  
);

PageButtons.propTypes = {
  page: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default PageButtons;

