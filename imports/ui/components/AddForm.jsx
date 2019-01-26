import React from 'react';
import TextInput from './TextInput';
import DropdownInput from './DropdownInput';

const AddForm = (props) => (
    <form onSubmit={props.handleSubmit}>
        {
            props.fields.map((field, i) => {
                switch(field.type){
                    case 'dropdown':
                        return <DropdownInput key={'field-'+i} {...field} />
                    default:
                        return <TextInput key={'field-'+i} {...field} />
                }
            })
        }
        <button type="submit">{props.submitLabel}</button>
    </form>
);

export default AddForm;