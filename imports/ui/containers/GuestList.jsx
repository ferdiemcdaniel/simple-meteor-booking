import React, { Component } from 'react';
import AddForm from '../components/AddForm';
import Guest from '../components/Guest';
import List from '../components/List';

//data
import { withTracker } from 'meteor/react-meteor-data';
import Guests from '../../api/guests';

// let guests = [
//     {id: 0, name: "John Snow", gender: "Male", age: 21, nationality: "Targaryen/Stark"},
//     {id: 1, name: "Daenerys Targaryen", gender: "Female", age: 22, nationality: "Targaryen"},
//     {id: 2, name: "Sansa Stark", gender: "Female", age: 19, nationality: "Stark"},
//     {id: 3, name: "Arya Stark", gender: "Female", age: 16, nationality: "no_one"},
// ];

class GuestList extends Component{
    constructor(props){
        super(props);
        this.state = {
            form: {
                name: ""
            }
        }
    }

    addGuest = (e) => {
       e.preventDefault();
       let {form} = this.state;
       const newGuest = {
                name: form.name,
                gender: "Male",
                age: 18,
                nationality: "Cebuano"
        }; 
       form = {name: ""};
       this.setState({form}, () => {
        Guests.insert(newGuest);
       });
    }

    handleChangeName = (e) => this.setState({form: {...this.state.form, name: e.target.value}});
    
    render(){
        const {form} = this.state;
        const {guests} = this.props;
        console.log(guests);
        return(
            <div>
                <h1>WELCOME!</h1>
                <div style={styles.form}>
                    <p style={{margin: '10px'}}>Please visit our hotel!</p>
                    <AddForm
                        handleSubmit={this.addGuest}
                        submitLabel={"Book"}
                        fields={[
                            {type: 'text', placeholder: "Name", value: form.name, handleChange: this.handleChangeName}
                        ]}
                />
                </div>
                {guests.length ? (
                        <div>
                            <span><p style={styles.gray}>Current Guests:</p></span>
                            <List>
                                {guests.map( (person) => <Guest key={'guest_'+person.name+person.id} {...person} />)}
                            </List>
                        </div>
                    ):<span style={styles.gray}><p>-vacant-</p></span>
                }
            </div>
        );
    }
}

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'baseline'
    },
    gray: {
        color: 'gray'
    }
}

export default withTracker(() => {
    return {
        guests: Guests.find({}).fetch(),
    };
})(GuestList);