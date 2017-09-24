import React from 'react';

const Input = props => (

        <input value={props.value} onKeyPress={props.handleSubmit} onChange={props.onChange}/>

);



export default Input;