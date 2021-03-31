import { Component } from 'react';

class Statistics extends Component {
  render() {
    const {
      good,
      neutral,
      bad,
      total = 0,
      positivePercentage = 0,
    } = this.props;
    return (
      <div>
        <h2>Statistics</h2>
        <ul>
          <li>Good:{good}</li>
          <li>Neutral:{neutral}</li>
          <li>Bad:{bad}</li>
          <li>Total:{total}</li>
          <li>Positive feedback:{positivePercentage}%</li>
        </ul>
      </div>
    );
  }
}

export default Statistics;
