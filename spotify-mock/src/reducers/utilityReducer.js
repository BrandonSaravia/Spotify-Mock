import * as actionTypes from "../actions";

const initialState = {
    currentPage: 'home'
}

export const utilityReducer = (state = initialState, action) => {
    switch(action.type) {

        case actionTypes.SELECT_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.payload
            }
        }
        
        default:
            return state;
    }
}