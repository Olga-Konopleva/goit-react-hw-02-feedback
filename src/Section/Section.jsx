import { Component } from 'react';

class Section extends Component {
  render() {
    const { title } = this.props;
    return <h2>{title}</h2>;
  }
}

export default Section;
