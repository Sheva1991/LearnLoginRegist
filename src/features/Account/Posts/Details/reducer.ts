import {
    FETCH_POST_DETAILS_ERROR,
    FETCH_POST_DETAILS_REQUEST,
    FETCH_POST_DETAILS_RESPONSE,
    EDIT_POST_DETAILS_ERROR,
    EDIT_POST_DETAILS_REQUEST,
    EDIT_POST_DETAILS_RESPONSE
} from './constants'
import { PostDetailsState } from "./types";
import { postDetailsActions } from "./actions";


const initialState = {
    data: null,
    loading: false,
    editing: false,
    error: false
} as PostDetailsState;

const postDetails = (state: PostDetailsState = initialState, action: postDetailsActions): PostDetailsState => {
    switch (action.type) {
        case FETCH_POST_DETAILS_REQUEST: {
            return { ...state, loading: true, error: false }
        }

        case FETCH_POST_DETAILS_ERROR: {
            return { ...state, loading: false, error: true }
        }

        case FETCH_POST_DETAILS_RESPONSE: {
            return {
                ...state,
                loading: false,
                error: false,
                data: action.payload
            }
        }
        case EDIT_POST_DETAILS_REQUEST: {
            return { ...state, loading: true, error: false }
        }

        case EDIT_POST_DETAILS_ERROR: {
            return { ...state, loading: false, error: true }
        }

        case EDIT_POST_DETAILS_RESPONSE: {
            return {
                ...state,
                loading: false,
                error: false,
                data: action.payload
            }
        }
        default:
            return state;
    }
}


export default postDetails;

