import {
    FETCH_ERROR,
    FETCH_REQUEST,
    FETCH_RESPONSE,
} from './constants'
import { UsersState } from "./types";
import { UsersActions } from "./actions";


const initialState = {
    data: [],
    fetching: false,
    error: false
} as UsersState;

const users = (state: UsersState = initialState, action: UsersActions): UsersState => {
    switch (action.type) {
        case FETCH_REQUEST: {
            return { ...state, fetching: true, error: false }
        }

        case FETCH_ERROR: {
            return { ...state, fetching: false, error: true }
        }

        case FETCH_RESPONSE: {
            const {
                data
            } = action.payload
            return {
                ...state,
                fetching: false,
                error: false,
                data,
            }
        }
        default:
            return state;
    }
}


export default users;

