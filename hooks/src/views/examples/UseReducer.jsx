import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { add2, initialState, reducer } from '../../store/index'

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
                    <button className="btn" onClick={ () => add2(dispatch) }>+2</button>
                    <button className="btn" onClick={ () => dispatch({type: 'mult7'}) }>x7</button>
                    <button className="btn" onClick={ () => dispatch({type: 'div25'}) }>/25</button>
                    <button className="btn" onClick={ () => dispatch({type: 'toInt'}) }>to Int</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
