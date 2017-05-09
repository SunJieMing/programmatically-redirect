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
    this.props.newItem(formObject).then((action) => {
      this.props.history.replace(`/items/${action.payload.data.id}`);
    });
  }

  render() {
    return (
      <NewItemForm onSubmit={this.handleSubmit} />
    );
  }
}

NewItem = withRouter(NewItem);

export default connect(null, { newItem })(NewItem);
