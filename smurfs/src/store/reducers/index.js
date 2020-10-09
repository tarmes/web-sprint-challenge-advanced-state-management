import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS } from '../actions/index';

const initialState = {
    isLoading: false,
    isLoaded: false,
    smurfs: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                smurfs: action.payload
            }
        default: 
            return state;
    }
}