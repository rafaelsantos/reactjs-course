import React from 'react'
import IndirectChild from './IndirectChild'

export default (props) => {
    let name = ''
    let age = 0
    function sendInformations(nameParam, ageParam, nerd) {
        name = nameParam
        age = ageParam
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