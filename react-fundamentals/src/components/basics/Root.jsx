import React from 'react'
import Child from './Child'

export default (props) => {
    return (
        <div>
            <Child name="Clark" status={props.status} />
            <Child name="Susan" {...props} />
        </div>
    )
}