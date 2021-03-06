import {
    FETCH_ERROR,
    FETCH_REQUEST,
    FETCH_RESPONSE,
} from './constants'
import { UsersState } from "./types";
import { UsersActions } from "./actions";


const initialState = {
    data: null,
    pagination: {
        per_page: 6,
        total: 0,
        currentPage: 1
    },
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
            const { data, meta } = action.payload
            return {
                ...state,
                fetching: false,
                error: false,
                data,
                pagination: {
                    per_page: meta.per_page,
                    total: meta.total,
                    currentPage: meta.current_page
                }
            }
        }
        default:
            return state;
    }
}


export default users;

