import { Component } from 'react';

export class App extends Component {
  static propTypes = {
    //
  };
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 3,
      bad: 0,
    };
  }

  countTotalFeedback = () => {
    const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    return totalFeedback;
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button type="button">Good</button>
        <button type="button">Neutral</button>
        <button type="button">Bad</button>
        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total:</p>
        <p>Positive feedback:</p>
      </div>
    );
  }
}
