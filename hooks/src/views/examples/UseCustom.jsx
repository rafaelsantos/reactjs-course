import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { useCounter } from '../../hooks/counter'
import { useFetch } from '../../hooks/fetch'

const UseRef = (props) => {
    const [count, increment] = useCounter()
    const response = useFetch('http://files.cod3r.com.br/curso-react/estados.json')

    function display(states) {
        return states.map(state => <li key={state.nome}>{state.nome}/{state.sigla}</li>)
    }

    return (
        <div className="UseCustom">
            <PageTitle
                title="My Hook"
                subtitle="Custom Hook!"
            />

            <SectionTitle title="Exercise 01" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={() => increment()}>Increment</button>
                </div>
            </div>
            <SectionTitle title="Exercise 02" />
            <div className="center">
                <ul>
                    {!response.loading ? display(response.data) : false}
                </ul>
            </div>
        </div>
    )
}

export default UseRef
