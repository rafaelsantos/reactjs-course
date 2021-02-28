import './Menu.css'
import React from 'react'

import { Link } from 'react-router-dom'

const Menu = (props) => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/parameter/1">Parameter 1</Link>
                </li>
                <li>
                    <Link to="/parameter/2">Parameter 2</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu