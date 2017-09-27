import React from 'react';

const Input = props => (

        <input required value={props.value} placeholder="Stuff to do..." onKeyPress={props.handleSubmit} onChange={props.onChange} />

);



export default Input;