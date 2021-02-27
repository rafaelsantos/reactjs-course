import React from 'react'

import First from './components/basics/First'
import Parameter from './components/basics/Parameter'
import Fragment from './components/basics/Fragment'
import Random from './components/basics/Random'
import Root from './components/basics/Root'
import Child from './components/basics/Child'

import Card from './components/layout/Card'

import List from './components/list/List'

import Products from './components/list/Products'

import Conditional from './components/conditional/Conditional'
import User from './components/conditional/User'

import RootCommunication from './components/communication/DirectRoot'
import RootIndirectCommunication from './components/communication/IndirectRoot'

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

                <Card title="Children" color="#FA6900">
                    <Root status="OK">
                        <Child name="Item1" />
                        <Child name="Item2" />
                    </Root>
                </Card>

                <Card title="List">
                    <List />
                </Card>

                <Card title="Products" color="#588C73">
                    <Products />
                </Card>

                <Card title="Conditional Rendering" color="#FA6900">
                    <Conditional number={12} />
                </Card>

                <Card title="User Check">
                    <User user={ { name: 'Rafael' } }/>
                </Card>

                <Card title="Direct Communication" color="#588C73">
                    <RootCommunication />
                </Card>

                <Card title="Indirect Communication" color="#FA6900">
                    <RootIndirectCommunication />
                </Card>
            </div>
        </div>
    )
}