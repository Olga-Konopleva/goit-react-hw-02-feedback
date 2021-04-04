import { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Notification from '../Notification/Notification';

const Ul = styled.ul`
  list-style: none;
  padding-left: 10px;
`;
const Li = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

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
          <Ul>
            <Li>Good: {good}</Li>
            <Li>Neutral: {neutral}</Li>
            <Li>Bad: {bad}</Li>
            <Li>Total: {total}</Li>
            <Li>Positive feedback: {positivePercentage}%</Li>
          </Ul>
        ) : (
          <Notification message="No feedback given" />
        )}
      </>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
