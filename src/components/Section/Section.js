import React from 'react';
import PropTypes from 'prop-types';

import styles from './Section.module.css';

const Section = ({ children, title }) => {
  return (
    <div className={styles.sectionWrap}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {children}
    </div>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};

export default Section;