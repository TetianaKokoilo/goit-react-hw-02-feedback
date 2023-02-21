import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
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

  onLeaveFeedback = () => {
    this.setState()
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.props} onFeedback={this.onLeaveFeedback} />
        </Section>

        <Section title="Statsics">
          <Statistics
            points={this.state}
            onTotalCount={this.countTotalFeedback}
            onPositivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </div>
    );
  }
}
