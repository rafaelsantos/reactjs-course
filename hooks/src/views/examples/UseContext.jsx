import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import DataContext from '../../data/DataContext'
import { AppContext } from '../../data/Store'

const UseContext = (props) => {
    const context = useContext(DataContext)
    const { number, setNumber } = useContext(AppContext)

    function add(delta) {
        context.setState({
            ...context.state,
            number: context.state.number + delta
        })
    }
    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle=" Accepts object context and returns context actual value" />
            
            <SectionTitle title="Exercise 01" />
            <div className="center">
                <span className="text">{ context.state.text }</span>
                <span className="text">{ context.state.number }</span>

                <div>
                    <button className="btn" onClick={ () => add(1) }>+ 1</button>
                    <button className="btn" onClick={ () => add(-1) }>- 1</button>
                </div>
            </div>

            <SectionTitle title="Exercise 02" />
            <div className="center">
                <span className="text">{ number }</span>
                <div>
                    <button className="btn" onClick={ () => setNumber(number + 1) }>+ 1</button>
                    <button className="btn" onClick={ () => setNumber(number - 1) }>- 1</button>
                </div>
            </div>
        </div>
    )
}

export default UseContext
