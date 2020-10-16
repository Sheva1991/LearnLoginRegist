import {
    FETCH_USER_PROFILE_ERROR,
    FETCH_USER_PROFILE_REQUEST,
    FETCH_USER_PROFILE_RESPONSE
} from './constants'
import { UserProfileState } from "./types";
import { userProfileActions } from "./actions";


const initialState = {
    data: null,
    fetching: false,
    error: false
} as UserProfileState;

const userProfile = (state: UserProfileState = initialState, action: userProfileActions): UserProfileState => {
    switch (action.type) {
        case FETCH_USER_PROFILE_REQUEST: {
            return { ...state, fetching: true, error: false }
        }

        case FETCH_USER_PROFILE_ERROR: {
            return { ...state, fetching: false, error: true }
        }

        case FETCH_USER_PROFILE_RESPONSE: {
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


export default userProfile;

