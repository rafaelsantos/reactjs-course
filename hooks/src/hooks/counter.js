import { useState } from 'react'

export const useCounter = (initialValue = 100) => {
    const [count, setCount] = useState(initialValue)

    function increment() {
        setCount(count + 1)
    }

    return [count, increment]
}