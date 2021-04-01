import { Component } from 'react';
import Notification from '../Notification/Notification';

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
      <>
        {total ? (
          <ul>
            <li>Good:{good}</li>
            <li>Neutral:{neutral}</li>
            <li>Bad:{bad}</li>
            <li>Total:{total}</li>
            <li>Positive feedback:{positivePercentage}%</li>
          </ul>
        ) : (
          <Notification />
        )}
      </>
    );
  }
}

export default Statistics;
