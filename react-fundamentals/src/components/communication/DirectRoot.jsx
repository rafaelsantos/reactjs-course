import React from 'react'
import DirectChild from './DirectChild'

export default (props) => {
    return (
        <div>
            <DirectChild text="Child" number={34} bool={true} />
        </div>
    )
}