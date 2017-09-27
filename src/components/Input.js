import React from 'react';

const Input = props => (

        <input required value={props.value} onKeyPress={props.handleSubmit} onChange={props.onChange} />

);



export default Input;