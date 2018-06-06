import React, { Component, Fragment } from 'react';
import LoginForm from '/Users/yuriikalashnikov/Desktop/auth/form/src/components/LoginForm/index.js'





class App extends Component {

  submit = value=>{
    window.alert (JSON.stringify (value))
  }
  getInitialValues(){
    return{
      username:'Yurii',
      password:''
    }
  }
 
  render(){
    return (
      <Fragment>
      <div>Auth Form</div>
      <LoginForm onSubmit ={this.submit}
      initialValues={this.getInitialValues()}/>
    
      </Fragment>
    );
  }

}
export default App;