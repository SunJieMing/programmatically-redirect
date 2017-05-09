import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

class NewItemForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <Field name="name" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <Field name="image" component="input" type="text" />
        </div>
        <br />
        <button type="submit">Submit</button>
        <Link to="/">Cancel</Link>
      </form>
    );
  }
}

NewItemForm = reduxForm({
  form: 'new-item',
})(NewItemForm);

export default NewItemForm;
