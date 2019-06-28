// Code ControlledInput Component Here
import React, { Component } from 'react'

export default class ControlledInput extends Component {

    state = {
        value: ""
    }

    handleChange = e => {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    />
                </form>
            </div>
        )
    }
}
