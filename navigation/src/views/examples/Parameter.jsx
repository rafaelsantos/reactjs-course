import React from 'react'

import { useParams } from 'react-router-dom'

const Parameter = (props) => {
    const { id } = useParams()
    return (
        <div className="Parameter">
            <h1>Parameter</h1>
            <p>Parameter { id }</p>
        </div>
    )
}

export default Parameter