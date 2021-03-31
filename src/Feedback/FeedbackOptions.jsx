import { Component } from 'react';

class FeedbackOptions extends Component {
  render() {
    return (
      <div>
        <button onClick={this.handleIncrement}>Good</button>
        <button onClick={this.handleIncrement}>Neutral</button>
        <button onClick={this.handleIncrement}>Bad</button>
      </div>
    );
  }
}

export default FeedbackOptions;
