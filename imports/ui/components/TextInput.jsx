import React from 'react';

const TextInput = ({value, handleChange, placeholder}) => (
    <input value={value} onChange={handleChange} placeholder={placeholder}/>
);

export default TextInput;