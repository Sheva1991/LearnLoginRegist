import {
    FETCH_PROFILE_ERROR,
    FETCH_PROFILE_REQUEST,
    FETCH_PROFILE_RESPONSE,
    EDIT_PROFILE_ERROR,
    EDIT_PROFILE_REQUEST,
    EDIT_PROFILE_RESPONSE
} from './constants'
import { ProfileState } from "./types";
import { profileActions } from "./actions";


const initialState = {
    data: null,
    fetching: false,
    error: false
} as ProfileState;

const profile = (state: ProfileState = initialState, action: profileActions): ProfileState => {
    switch (action.type) {
        case FETCH_PROFILE_REQUEST: {
            return { ...state, fetching: true, error: false }
        }

        case FETCH_PROFILE_ERROR: {
            return { ...state, fetching: false, error: true }
        }

        case FETCH_PROFILE_RESPONSE: {
            return {
                ...state,
                fetching: false,
                error: false,
                data: action.payload,
            }
        }
        case EDIT_PROFILE_REQUEST: {
            return { ...state, fetching: true, error: false }
        }

        case EDIT_PROFILE_ERROR: {
            return { ...state, fetching: false, error: true }
        }

        case EDIT_PROFILE_RESPONSE: {
            return {
                ...state,
                fetching: false,
                error: false,
            }
        }
        default:
            return state;
    }
}


export default profile;

