import './Content.css'
import React from 'react'
import About from '../../views/examples/About'
import Parameter from '../../views/examples/Parameter'
import Home from '../../views/examples/Home'
import { Switch, Route } from 'react-router-dom'

const Content = (props) => (
    <main className="Content">
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/parameter/:id">
                <Parameter />
            </Route>
            <Route path="/parameter/:id">
                <Parameter />
            </Route>
            <Route path="/about">
                <About />
            </Route>
        </Switch>
    </main>
)

export default Content