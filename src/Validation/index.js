export const requiredInput=(input)=>
    input ? undefined : `Input is required`;

    export const correctInput = input => 
    input !=='Yurii' ? 'Incorrect Username' : undefined;

  /** export const matchInput = (input, allInputs)=>
   input===allInputs.password ? undefined : 'Password do not match'; */
   export function matchInput(input, allInputs){
       return input===allInputs.password ? undefined : 'Password do not match'
   }
  


