import { Component } from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <section>
        <h2>{title}</h2>
        {children}
      </section>
    );
  }
}

Section.defaultProps = {
  children: [],
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
