import { Component } from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = evt => {
    const textButton = evt.target.textContent.toLowerCase();
    this.setState(prevState => ({ [textButton]: prevState[textButton] + 1 }));
  };

  countTotalFeedback = () => {
    const arrayFeedback = Object.values(this.state);
    const total = arrayFeedback.reduce((acc, sum) => acc + sum, 0);
    return total;
  };

  countPositiveFeedbackPercentage = total => {
    if (this.state.good === 0) {
      return 0;
    }
    return (this.state.good / total) * 100;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(total);

    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.handleIncrement} />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </div>
    );
  }
}

export default App;
