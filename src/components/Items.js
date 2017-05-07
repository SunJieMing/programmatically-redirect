import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../actions';

class Items extends Component {
  componentDidMount() {
    this.props.getItems();
  }
  setActiveItem() {

  }
  render() {
    return (
      <div>
        <ul>
          {this.props.items.map((item, i) => {
            return (
              <li key={i} onClick={setActiveItem}>
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps, { getItems })(Items);
