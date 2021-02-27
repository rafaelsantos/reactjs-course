import React from 'react'

export default function Parameter(props) {
    const status = props.subtitle === 'Funny' ? 'Is Funny' : 'Not Joy'
    return (
        <div>
            <h2>{ props.title }</h2>
            <h3>{ props.subtitle }</h3>
            <h4>{ status }</h4>
        </div>
    )
}