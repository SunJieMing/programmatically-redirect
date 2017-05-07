import React, { Component } from 'react';
import { setActiveItem } form '../actions';
import { connect } from 'react-redux';

class ActiveItem extends Component {
  componentDidMount() {
    this.props.setActiveItem(parseInt(this.props.match.url.split('/').pop()));
  }
  render() {
    return (
      <div>Hi</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeItem: state.activeItem,
  };
};

export default connect(mapStateToProps)(ActiveItem);
