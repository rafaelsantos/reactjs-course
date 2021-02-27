import React from 'react'

import First from './components/basics/First'
import Parameter from './components/basics/Parameter'
import Fragment from './components/basics/Fragment'

//Can use export default function name(props)
//Or can be anonym like export default function(props)
//Or can use arrow function like export default (props) => {}
//Or can be use like export default () => {}
//Or can be use like export default _ => {}
export default () => {
    return (
        <div id="app">
            <h1>React Fundamentals</h1>
            <First></First>
            <Parameter 
                title="Component" 
                subtitle="Funny" />
            <Fragment />
        </div>
    )
}