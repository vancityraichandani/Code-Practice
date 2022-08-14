import * as actionTypes from './actions'

const initialState = {
    text: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TYPING:
            return {
                ...state,
                text: action.text
            }
        default: return state
    }
}

export default reducer