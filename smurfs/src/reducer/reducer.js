import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAILURE,
    SEND_SMURF_START,
    SEND_SMURF_SUCCESS,
    SEND_SMURF_FAILURE
} from '../middleware/middleware';

const initialState = {
    smurfs: [],
    isFetching: false,
    sending: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: ''
            }
        case SEND_SMURF_START:
            return {
                ...state,
                sending: true
            }
        case SEND_SMURF_SUCCESS:
            return {
                ...state,
                sending: false
            }
        default:
            return state;
    }
}