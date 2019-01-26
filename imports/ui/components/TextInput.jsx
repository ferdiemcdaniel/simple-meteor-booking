import React from 'react';

const TextInput = ({value, handleChange}) => (
    <input value={value} onChange={handleChange} />
);

export default TextInput;