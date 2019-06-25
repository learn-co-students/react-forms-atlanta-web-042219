// Code ControlledInput Component Here
import React, { Component } from 'react'

export default class ControlledInput extends Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }
  handleNameChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state);
  }

  render() {
    return (
      <form>
        <input type='text' name="firstName" value={this.state.firstName} onChange={event => this.handleNameChange(event)} />
        <input type="text" name="lastName" value={this.state.lastName} onChange={event => this.handleNameChange(event)} />
      </form>
    )
  }
}
