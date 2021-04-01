import { Component } from 'react';

class FeedbackButtons extends Component {
  render() {
    const { option, onLeaveFeedback } = this.props;
    return (
      <button onClick={onLeaveFeedback} data-feedback={option}>
        {option}
      </button>
    );
  }
}

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div>
        {options.map(option => (
          <FeedbackButtons
            key={option}
            option={option}
            onLeaveFeedback={onLeaveFeedback}
          />
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;
