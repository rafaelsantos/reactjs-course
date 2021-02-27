import React from 'react'
import list from '../../data/list'

export default (props) => {
    const collection = list.map(item => {
        return (
            <li key={ item.message }>
                [{ item.type }] { item.message }
            </li>
        )
    })
    return (
        <div>
            <ul style={ { listStyle: 'none' } }>
                { collection }
            </ul>
        </div>
    )
}