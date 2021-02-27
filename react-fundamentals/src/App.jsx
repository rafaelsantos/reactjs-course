import React from 'react'

import First from './components/basics/First'
import Parameter from './components/basics/Parameter'
import Fragment from './components/basics/Fragment'
import Random from './components/basics/Random'
import Root from './components/basics/Root'

import Card from './components/layout/Card'

import './App.css'

//Can use export default function name(props)
//Or can be anonym like export default function(props)
//Or can use arrow function like export default (props) => {}
//Or can be use like export default () => {}
//Or can be use like export default _ => {}
export default () => {
    return (
        <div className="App">
            <h1>React Fundamentals</h1>

            <div className="Cards">
                <Card title="First component" color="#FA6900">
                    <First></First>
                </Card>

                <Card title="Parameters">
                    <Parameter 
                        title="Component" 
                        subtitle="Funny" />
                </Card>

                <Card title="Fragment" color="#E8B71A">
                    <Fragment />
                </Card>
                
                <Card title="Random Number" color="#588C73">
                    <Random min={2} max={35} />
                </Card>

                <Card title="Children" color="#588C73">
                    <Root status="OK" />
                </Card>
            </div>
        </div>
    )
}