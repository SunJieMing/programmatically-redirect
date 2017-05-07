import React, { Component } from 'react';
import NewItemForm from './NewItemForm';
import { newItem } from '../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class NewItem extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(formObject) {
    this.props.newItem(formObject).then(() => {
      this.props.history.push('/items');
    });
  }
  render() {
    return (
      <div>
        <NewItemForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default connect(null, { newItem })(withRouter(NewItem));
