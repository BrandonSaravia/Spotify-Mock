// import axios from 'axios';

export const SELECT_CURRENT_PAGE = 'SELECT_CURRENT_PAGE';


export const selectCurrentPage = page_name => {
    return dispatch => {
        dispatch({
            type: SELECT_CURRENT_PAGE, 
            payload: page_name
        })
    }
}