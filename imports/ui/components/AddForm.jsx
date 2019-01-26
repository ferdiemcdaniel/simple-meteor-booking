import React from 'react';
import TextInput from './TextInput';

const AddForm = (props) => (
    <form onSubmit={props.handleSubmit}>
        <TextInput {...props.fields[0]} />
        <button type="submit">Add</button>
    </form>
);

export default AddForm;