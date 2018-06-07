 export const validate = input => {
   const error={};
 if(!input.username){
 error.username = "Enter your Username"
 } else if (input.username !== 'Yurii'){
    error.username = 'Username is incorrect';
 }
 if(!input.password){
    error.password = 'Enter your Password';
 }
 return error;
 }
