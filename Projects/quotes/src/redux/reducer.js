import * as actionTypes from './actions'
import quotes from '../constants/quotes'

const initialState = {
    quotes,
    quote: "",
    author: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REFRESH:
            let idx = Math.floor(Math.random() * (100))
            return {
                ...state,
                quote : quotes[idx].quote,
                author : quotes[idx].author
            }

        default: return state
    }
}

export default reducer