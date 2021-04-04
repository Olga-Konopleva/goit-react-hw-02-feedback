import { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  text-transform: capitalize;
  border-radius: 3px;

  &:not(:last-child) {
    margin-right: 8px;
  }
  &:hover {
    background: white;
  }
`;

class FeedbackButtons extends Component {
  render() {
    const { option, onLeaveFeedback } = this.props;
    return (
      <Button onClick={onLeaveFeedback} data-feedback={option}>
        {option}
      </Button>
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

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

FeedbackButtons.propTypes = {
  option: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
