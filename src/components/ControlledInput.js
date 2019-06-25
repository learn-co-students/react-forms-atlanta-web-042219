import React from 'react';

class Form extends React.Component {
    state = { 
        firstName: "Johny",
        lastName: "Boi",
        fullName: 'Johny Boi'
     }

    //  handleFirstNameChange = event => {
    //      this.setState({
    //          firstName: event.target.value
    //      })
    //  }

    //  handleLastNameChange = event => {
    //      this.setState({
    //          lastName: event.target.value
    //      })
    //  }

     handleChange = (event) => {
        this.setState({
          [event.target.id]: event.target.value,
          fullName: event.target.id === 'firstName' ? event.target.value+' '+this.state.lastName : this.state.firstName+' '+event.target.value
        });
      }


    render() {
        return ( 
            
            <form onSubmit={ event => this.handleSubmit(event) }>
                <input type="text" id="firstName" onChange={this.handleChange} value={this.state.firstName}/>
                <input type="text" id="lastName" onChange={event => this.handleChange(event)} value={this.state.lastName}/>
                <input disabled type="text" id="fullName" value={this.state.fullName} />
            </form>
         );
    }
}
 
export default Form;