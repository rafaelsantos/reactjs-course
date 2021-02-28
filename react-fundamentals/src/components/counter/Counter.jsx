import React, { Component } from 'react'
import './Counter.css'
import Display from './Display'
import Button from './Button'
import Offset from './Offset'

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

    changeOffset = (value) => {
        this.setState({
            offset: value
        })
    }

    render() {
        return (
            <div className="Counter">
                <h2>Counter</h2>
                <Display number={this.state.number} />
                <Offset offset={ this.state.offset } changeOffset={ this.changeOffset } />
                <Button increment={ this.increment } />
            </div>
        )
    }
}