import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getItems } from '../actions';

class Items extends Component {
  componentDidMount() {
    if (this.props.items.length) return;
    this.props.getItems();
  }

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <br />
        <ul>
          {this.props.items.map((item, i) => {
            return (
              <li key={i}>
                <Link to={`/items/${item.id}`}>
                  {item.name}
                </Link>
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
