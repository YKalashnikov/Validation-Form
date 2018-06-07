import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import myInput from '../Field/index.js';
import {requiredInput, correctInput} from '/Users/yuriikalashnikov/Desktop/auth/form/src/Validation/index.js'


class LoginForm extends Component {
  
    render () {
      
      const {handleSubmit} = this.props;
      return (
        <form onSubmit={handleSubmit}>
          <Field
            validate={[requiredInput, correctInput]}
            
            component={myInput}
            
            type="text"
            placeholder="Username"
          />
          <Field
            validate={[requiredInput]}
            component={myInput}
            type="password"
            placeholder="Password"
          />
          <button type="submit" label="submit">Submit</button>
        </form>
      );
    }
  }
  
LoginForm = reduxForm ({
    form: 'login'
})(LoginForm);

export default LoginForm;