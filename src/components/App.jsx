import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  static propTypes = {
    //
  };

    state = {
      good: 0,
      neutral: 2,
      bad: 2,
    };

  countTotalFeedback = () => {
    const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    return totalFeedback;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button type="button">Good</button>
        <button type="button">Neutral</button>
        <button type="button">Bad</button>
        <h2>Statistics</h2>
        <Statistics
          points={this.state}
          onTotalCount={this.countTotalFeedback}
          onPositivePercentage={this.countPositiveFeedbackPercentage}
        />
      </div>
    );
  }
}
