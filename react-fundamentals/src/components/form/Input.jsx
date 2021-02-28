import React, { useState } from 'react'
import './Input.css'

export default (props) => {
    const [value, setValue] = useState('Init')

    function whenType(e) {
        setValue(e.target.value)
    }
    return (
        <div className="Input">
            <h2>{ value }</h2>
            <div style={ { display: 'flex', flexDirection: 'column' } }>
                <input value={ value } onChange={ whenType } />
                <input value={ value } readOnly />
            </div>
        </div>
    )
}