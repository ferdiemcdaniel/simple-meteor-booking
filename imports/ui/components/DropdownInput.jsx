import React from 'react';

const DropdownInput = ({value, options, handleChange, placeholder, style}) => (
    <select onChange={handleChange} selected={value} style={style}>
        <option key="default-0" value={0}>{placeholder}</option>
        {
            options.map((opt,i) => <option key={"opt-"+i} value={opt}>{opt}</option>)
        }
    </select>
);

export default DropdownInput;