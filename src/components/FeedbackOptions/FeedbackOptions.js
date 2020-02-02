import React from 'react';
import PropTypes from 'prop-types';

import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.feedbackButtons}>
      <button className={styles.feedbackButton} type="button" onClick={() => onLeaveFeedback(options.GOOD)}>Good</button>
      <button className={styles.feedbackButton} type="button" onClick={() => onLeaveFeedback(options.NEUTRAL)}>Neutral</button>
      <button className={styles.feedbackButton} type="button" onClick={() => onLeaveFeedback(options.BAD)}>Bad</button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    GOOD: PropTypes.string,
    NEUTRAL: PropTypes.string,
    BAD: PropTypes.string
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;
