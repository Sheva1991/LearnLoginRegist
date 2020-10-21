import {
    FETCH_USER_DETAILS_ERROR,
    FETCH_USER_DETAILS_REQUEST,
    FETCH_USER_DETAILS_RESPONSE
} from './constants'
import { UserDetailsState } from "./types";
import { userDetailsActions } from "./actions";


const initialState = {
    id: null,
    profile: null,
    posts_count: null,
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
            const {
                id, profile, posts_count
            } = action.payload
            return {
                ...state,
                fetching: false,
                error: false,
                id,
                profile,
                posts_count
            }
        }
        default:
            return state;
    }
}


export default userDetails;

