import { Component } from 'react';

class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback } = this.props;
    return (
      <div>
        <button onClick={onLeaveFeedback}>Good</button>
        <button onClick={onLeaveFeedback}>Neutral</button>
        <button onClick={onLeaveFeedback}>Bad</button>
      </div>
    );
  }
}

export default FeedbackOptions;
