import React, { useState, useCallback } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './UseCallbackButtons'

const UseCallback = (props) => {
    const [count, setCount] = useState(0)

    const increment = useCallback(function (delta) {
        setCount(current => current + delta)
    }, [setCount])

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Returns a memorized function" />

            <div className="center">
                <span className="text">{ count }</span>

                <UseCallbackButtons increment={ increment } />
            </div>
        </div>
    )
}

export default UseCallback
