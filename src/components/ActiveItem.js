import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { setActiveItem } from '../actions';
import { connect } from 'react-redux';

class ActiveItem extends Component {
  componentDidMount() {
    this.props.setActiveItem(this.props.match.params.id);
  }

  render() {
    if (!this.props.activeItem) return (
      <h1 style={{textAlign: 'center'}}>Item Not Found</h1>
    );

    return (
      <div style={{textAlign: 'center'}}>
        <h1>{this.props.activeItem.name}</h1>
        <br />
        <img src={this.props.activeItem.image} />
        <br />
        <Link to="/">Home</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeItem: state.activeItem,
  };
};

export default connect(mapStateToProps, { setActiveItem })(ActiveItem);
