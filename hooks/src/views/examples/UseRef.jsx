import React, { useState, useRef, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/PageTitle'

const merge = function(s1, s2) {
    return [...s1].map(function(e, i) {
        return `${e}${s2[i] || ""}`
    }).join("")
}

const UseRef = (props) => {
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    const count = useRef(0)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    useEffect(function() {
        count.current = count.current + 1
        myInput2.current.focus()
    }, [value1])

    useEffect(function() {
        count.current = count.current + 1
        myInput1.current.focus()
    }, [value2])
    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Returns a mutable object with .current property" />

            <SectionTitle title="Exercise 01" />
            <div className="center">
                <div>
                    <span className="text">Value: </span>
                    <span className="text">{ merge(value1, value2) } [</span>
                    <span className="text red">{ count.current }</span>
                    <span className="text">]</span>
                </div>
            </div>

            <div className="center">
                <input type="text" ref={ myInput1 } className="input" value={ value1 } onChange={ e => setValue1(e.target.value) } />
            </div>

            <SectionTitle title="Exercise 02" />
            <div className="center">
                <input type="text" ref={ myInput2 } className="input" value={ value2 } onChange={ e => setValue2(e.target.value) } />
            </div>
        </div>
    )
}

export default UseRef
