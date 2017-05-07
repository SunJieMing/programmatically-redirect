import React, { Component } from 'react';
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
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

NewItemForm = reduxForm({
  form: 'new-item',
})(NewItemForm);

export default NewItemForm;
