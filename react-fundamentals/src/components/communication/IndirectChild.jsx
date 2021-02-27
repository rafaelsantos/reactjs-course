import React from 'react'

export default (props) => {
    return (
        <div>
            <div>Child</div>
            <button onClick={e => props.whenClick('Paul', 57, false)}>Send informations</button>
        </div>
    )
}