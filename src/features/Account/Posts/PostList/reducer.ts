import {
    FETCH_ERROR,
    FETCH_REQUEST,
    FETCH_RESPONSE,
    ADD_POST_ERROR,
    ADD_POST_REQUEST,
    ADD_POST_RESPONSE
} from './constants'
import { PostState } from "./types";
import { PostActions } from "./actions";


const initialState = {
    data: null,
    fetching: false,
    error: false,
} as PostState;

const posts = (state: PostState = initialState, action: PostActions): PostState => {
    switch (action.type) {
        case FETCH_REQUEST: {
            return { ...state, fetching: true, error: false }
        }

        case FETCH_ERROR: {
            return { ...state, fetching: false, error: true }
        }

        case FETCH_RESPONSE: {
            const { data, meta, links } = action.payload
            return {
                ...state,
                fetching: false,
                error: false,
                data,
                meta,
                links
            }
        }
        case ADD_POST_REQUEST: {
            return { ...state, fetching: true, error: false }
        }

        case ADD_POST_ERROR: {
            return { ...state, fetching: false, error: true }
        }

        case ADD_POST_RESPONSE: {
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


export default posts;

