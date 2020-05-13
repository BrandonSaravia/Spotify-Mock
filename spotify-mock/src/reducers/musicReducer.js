import * as actionTypes from "../actions";

const initialState = {
    
}

export const musicReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case actionTypes.SELECT_CURRENT_PAGE:
            return null
            
        default:
            return state;
    }
}