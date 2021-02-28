import React, { Component } from 'react'
import './Counter.css'

export default class Counter extends Component {
    state = {
        number: this.props.number || 0,
        offset: this.props.offset || 5
    }

    increment = () => {
        this.setState({
            number: this.state.number + this.state.offset
        })
    }

    changeOffset = (event) => {
        this.setState({
            //+value - Convert to int
            offset: +event.target.value
        })
    }

    render() {
        return (
            <div className="Counter">
                <h2>Counter</h2>
                <h3>Value: { this.state.number }</h3>
                <div>
                    <label htmlFor="offset">Offset:</label>
                    <input id="offset" type="number" value={ this.state.offset } onChange={ this.changeOffset } /> 
                </div>
                <button onClick={ this.increment }>Inc</button>
            </div>
        )
    }
}