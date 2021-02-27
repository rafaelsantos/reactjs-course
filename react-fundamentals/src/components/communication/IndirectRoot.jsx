import React, { useState } from 'react'
import IndirectChild from './IndirectChild'

export default (props) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)

    function sendInformations(nameParam, ageParam, nerdParam) {
        setName(nameParam)
        setAge(ageParam)
    }
    return (
        <div>
            <div>
                <span> { name } </span>
                <span> { age } </span>
            </div>
            <IndirectChild whenClick={sendInformations} />
        </div>
    )
}