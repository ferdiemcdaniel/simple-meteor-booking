import React, { Component } from 'react';
import AddForm from '../components/AddForm';
import Guest from '../components/Guest';
import List from '../components/List';

let guests = [
    {id: 0, name: "John Snow", gender: "Male", age: 21, nationality: "Targaryen/Stark"},
    {id: 1, name: "Daenerys Targaryen", gender: "Female", age: 22, nationality: "Targaryen"},
    {id: 2, name: "Sansa Stark", gender: "Female", age: 19, nationality: "Stark"},
    {id: 3, name: "Arya Stark", gender: "Female", age: 16, nationality: "no_one"},
];

export default class GuestList extends Component{
    constructor(props){
        super(props);
        this.state = {
            form: {
                name: ""
            },
            guests: guests
        }
    }

    getNextId = () => {
        return Math.max.apply(Math, this.state.guests.map((g) => g.id )) + 1;
    }

    addGuest = (e) => {
       e.preventDefault();
       let {guests, form} = this.state;
       guests.push({
            id: this.getNextId(),
            name: form.name,
            gender: "Male",
            age: 18,
            nationality: "Cebuano"
       });
       form = {name: ""};
       this.setState({guests,form});
    }

    handleChangeName = (e) => this.setState({form: {...this.state.form, name: e.target.value}});
    
    render(){
        const {guests, form} = this.state;
        return(
            <div>
                <h1>WELCOME!</h1>
                <div style={styles.form}>
                    <p>Please visit our hotel:</p>
                    <AddForm
                        handleSubmit={this.addGuest}
                        fields={[
                            {type: 'text', value: form.name, handleChange: this.handleChangeName}
                        ]}
                />
                </div>
                <List>
                    {guests.map((person) => <Guest key={person.id} {...person} />)}
                </List>
            </div>
        );
    }
}

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'row',
    }
}