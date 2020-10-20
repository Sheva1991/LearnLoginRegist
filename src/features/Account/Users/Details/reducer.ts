import {
    FETCH_USER_DETAILS_ERROR,
    FETCH_USER_DETAILS_REQUEST,
    FETCH_USER_DETAILS_RESPONSE
} from './constants'
import { UserDetailsState } from "./types";
import { userDetailsActions } from "./actions";


const initialState = {
    data: null,
    fetching: false,
    error: false
} as UserDetailsState;

const userDetails = (state: UserDetailsState = initialState, action: userDetailsActions): UserDetailsState => {
    switch (action.type) {
        case FETCH_USER_DETAILS_REQUEST: {
            return { ...state, fetching: true, error: false }
        }

        case FETCH_USER_DETAILS_ERROR: {
            return { ...state, fetching: false, error: true }
        }

        case FETCH_USER_DETAILS_RESPONSE: {
            return {
                ...state,
                fetching: false,
                error: false,
                data: action.payload,
            }
        }
        default:
            return state;
    }
}


export default userDetails;

