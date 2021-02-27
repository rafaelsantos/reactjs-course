import React from 'react'

export default (props) => {
    const { min, max } = props
    const random = Math.floor(Math.random() * (max - min)) + min
    return (
        <>
            <h2>Random number is { random }</h2>
        </>
    )
}