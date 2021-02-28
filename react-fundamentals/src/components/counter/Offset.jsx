import React from 'react'

export default (props) => {
    return (
        <div>
            <label htmlFor="offset">Offset:</label>
            <input id="offset" 
                   type="number" 
                   value={ props.offset } 
                   onChange={ e => props.changeOffset(+e.target.value) } /> 
        </div>
    )
}