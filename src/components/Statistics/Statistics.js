import React from 'react';
import PropTypes from 'prop-types';

import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={styles.statisticsList}>
      <li className={styles.statisticsItem}>
        Good: {good}
      </li>
      <li className={styles.statisticsItem}>
        Neutral: {neutral}
      </li>
      <li className={styles.statisticsItem}>
        Bad: {bad}
      </li>
      <li className={styles.statisticsItem}>
        Total: {total}
      </li>
      <li className={styles.statisticsItem}>
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
};

export default Statistics;
