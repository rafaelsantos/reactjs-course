import React, { useState, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calculateFactorial(n) {
    if (n < 0) return -1
    if (n === 0) return 1
    return calculateFactorial(n -1) * n
}

function checkEvenNumber(n) {
    if (n % 2 === 0) return "Even"
    return "Odd"
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [factorial, setFactorial] = useState(1)
    const [status, setStatus] = useState("")

    useEffect(function() {
        setFactorial(calculateFactorial(number))
    }, [number])

    useEffect(function() {
        setStatus(checkEvenNumber(number))
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Run efects in functional components" />

            <SectionTitle title="Exercise 01" />
            <div className="center">
                <div>
                    <span className="text">Factorial: </span>
                    <span className="text red">{ factorial }</span>
                </div>
                <input type="number" className="input" value={ number } onChange={ e => setNumber(e.target.value) } />
            </div>

            <SectionTitle title="Challenge" />
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{ status }</span>
                </div>
                <input type="number" className="input" value={ number } onChange={ e => setNumber(e.target.value) } />
            </div>
        </div>
    )
}

export default UseEffect
