import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import myInput from '../Field/index.js';
import {requiredInput, correctInput, matchInput} from '/Users/yuriikalashnikov/Desktop/auth/form/src/Validation/index.js';



class LoginForm extends Component {
  
    render () {
      
      const {handleSubmit} = this.props;
      return (
        <form onSubmit={handleSubmit}>
          <Field
            name = "username"
            validate={[requiredInput, correctInput]}
            component={myInput}  
            type="text"
            placeholder="Username"
          />
          <Field
            name = 'password'
            validate={[requiredInput]}
            component={myInput}
            type="password"
            placeholder="Password"
          />
          <Field
            name="confirm-password"
            component={myInput}
            type="password"
            placeholder="Confirm Password"
            validate={[requiredInput, matchInput]}
/>
          <button type="submit" label="submit">Submit</button>
        </form>
      );
    }
  }
  
LoginForm = reduxForm ({
    form: 'login',
   
})(LoginForm);

export default LoginForm;