import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import First from './components/basics/First'
import Parameter from './components/basics/Parameter'

ReactDOM.render(
    <div>
        <First></First>
        <Parameter 
            title="Component" 
            subtitle="Funny" />
    </div>,
    document.getElementById('root')
)