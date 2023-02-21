import { Component } from 'react';

export class App extends Component {
  static propTypes = {
    //
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return <div>
      <h2>Please leave feedback</h2>
      <button type='button'>Good</button>
      <button type='button'>Neutral</button>
      <button type='button'>Bad</button>
      <h2>Statistics</h2>
      <p>Good <span>{this.state.good}</span></p>
      <p>Neutral <span>{this.state.neutral}</span></p>
      <p>Bad <span>{this.state.bad}</span></p>
    </div>;
  }
}
