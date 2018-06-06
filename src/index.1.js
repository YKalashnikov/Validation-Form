import React from 'react';

const myInput = props =>{
    return (
        <input {...props.input} type={props.type} placeholder={props.placeholder}/>
    )
}
export default myInput;