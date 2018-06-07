import React, { Component, Fragment } from 'react';
import { SubmissionError} from 'redux-form';
import LoginForm from '/Users/yuriikalashnikov/Desktop/auth/form/src/components/LoginForm/index.js'






class App extends Component {

  submit = input=>{
    if(['Yurii', 'Alex', 'Mike', 'Sveta'].includes (input.username)){
      throw new SubmissionError ({
        username : "Username already taken",
      });
    }else{
      window.alert (JSON.stringify(input))
    }
};
  getInitialValues(){
    return{
      username:'Dima',
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