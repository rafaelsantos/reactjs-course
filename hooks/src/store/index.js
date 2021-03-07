import { reducer } from './reducers'
import { add2 } from './actions/number'

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}

export {
    reducer,
    add2,
    initialState
}