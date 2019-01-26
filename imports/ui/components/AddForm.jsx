import React from 'react';
import TextInput from './TextInput';

const AddForm = (props) => (
    <form onSubmit={props.handleSubmit}>
        <TextInput {...props.nameInput} />
        <button type="submit">Add</button>
    </form>
);

export default AddForm;