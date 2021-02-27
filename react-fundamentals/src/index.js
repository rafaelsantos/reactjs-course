import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

const tag = <div>Hello React!!!</div>

const el = document.getElementById('root')
ReactDOM.render(
    <div>
        { tag }
    </div>,
    el
)