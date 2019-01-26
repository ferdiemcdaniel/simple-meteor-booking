import React from 'react';

const TextInput = ({value, handleChange, placeholder, style}) => (
    <input value={value} onChange={handleChange} placeholder={placeholder} style={style}/>
);

export default TextInput;