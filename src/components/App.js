import React, { Component } from 'react';

import Layout from './Layout';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification';

const FeedbackType = {
  GOOD: 'good',
  NEUTRAL: 'neutral',
  BAD: 'bad'
}

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleFeedback = value => {
    this.setState(prevState => {
      return (
        { [value]: prevState[value] + 1 }
      );
    })
  }

  countTotalFeedback() {
    const total = Object.values(this.state).reduce((acc, item) => (acc += item), 0);
    return total;
  }

  countPositiveFeedbackPercentage() {
    const positiveFeedback = this.state.good;
    const total = this.countTotalFeedback() || 1;
    const percentage = Math.round(positiveFeedback / total * 100);
    return percentage;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions options={FeedbackType} onLeaveFeedback={this.handleFeedback} />
        </Section>

        <Section title="Statistics">
          {total ?
            <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
            :
            <Notification message="No feedback given" />
          }
        </Section>
      </Layout>
    );
  }
}
