import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}

function reducer(state, action) {
    switch(action.type) {
        case 'add2':
            return {...state, number: state.number + 2}
        case 'mult7':
            return {...state, number: state.number * 7}
        case 'div25':
            return {...state, number: state.number / 25}
        case 'toInt':
            return {...state, number: parseInt(state.number)}
        case 'login':
            return {...state, user: { name: action.payload }}
        default:
            return state
    }
}

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Another way of controlling state in components"
            />
            <div className="center">
                { 
                    state.user ? <span className="text">{ state.user.name }</span> :
                    <span className="text">Not authenticated</span>
                }
                <span className="text"></span>
                <span className="text">{ state.number }</span>
                <div>
                    <button className="btn" onClick={ () => dispatch({type: 'login', payload: 'Rafael'}) }>Login</button>
                    <button className="btn" onClick={ () => dispatch({type: 'add2'}) }>+2</button>
                    <button className="btn" onClick={ () => dispatch({type: 'mult7'}) }>x7</button>
                    <button className="btn" onClick={ () => dispatch({type: 'div25'}) }>/25</button>
                    <button className="btn" onClick={ () => dispatch({type: 'toInt'}) }>to Int</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
