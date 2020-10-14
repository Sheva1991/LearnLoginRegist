import {
    AUTHORIZE_REQUEST,
    AUTHORIZE_ERROR,
    AUTHORIZE_RESPONSE,
    LOGIN_ERROR,
    LOGIN_REQUEST,
    LOGIN_RESPONSE,
    REGISTRATE_ERROR,
    REGISTRATE_REQUEST,
    REGISTRATE_RESPONSE,
    LOGOUT_REQUEST,
    LOGOUT_ERROR,
    LOGOUT_RESPONSE,
    VERIFY_REQUEST,
    VERIFY_ERROR,
    VERIFY_RESPONSE,
    RECOVERY_REQUEST,
    RECOVERY_ERROR,
    RECOVERY_RESPONSE,
    RESET_REQUEST,
    RESET_ERROR,
    RESET_RESPONSE,
} from './constants'
import { AuthState } from "./types";
import { AuthActions } from "./actions";
import { STORAGE } from '../../utils/storage';


const initialState = {
    user: null,
    token: STORAGE.getItem('token') || null,
    loading: false,
    error: null
} as AuthState;

const auth = (state: AuthState = initialState, action: AuthActions): AuthState => {
    switch (action.type) {
        case AUTHORIZE_REQUEST: {
            return { ...state, loading: true }
        }

        case AUTHORIZE_RESPONSE: {
            const token = STORAGE.getItem('token')
            return {
                ...state,
                user: action.payload,
                token: token,
                loading: false
            }
        }
        case AUTHORIZE_ERROR: {
            return { ...state, loading: false }
        }
        case LOGIN_REQUEST: {
            return { ...state, loading: true }
        }

        case LOGIN_RESPONSE: {
            const {
                user,
                token
            } = action.payload
            return {
                ...state,
                user,
                token,
                loading: false
            }
        }

        case LOGIN_ERROR: {
            return { ...state, loading: false }
        }

        case REGISTRATE_REQUEST: {
            return { ...state, loading: true }
        }

        case REGISTRATE_RESPONSE: {
            const {
                user,
                token
            } = action.payload
            return {
                ...state,
                user,
                token,
                loading: false
            }
        }
        case REGISTRATE_ERROR: {
            return { ...state, loading: false }
        }


        case LOGOUT_REQUEST: {
            return { ...state, loading: true }
        }
        case LOGOUT_RESPONSE: {
            return {
                ...initialState,
                token: null
            }
        }
        case LOGOUT_ERROR: {
            return { ...state, loading: false }
        }
        case VERIFY_REQUEST: {
            return { ...state, loading: true }
        }

        case VERIFY_RESPONSE: {
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        }
        case VERIFY_ERROR: {
            return { ...state, loading: false }
        }
        case RECOVERY_REQUEST: {
            return { ...state, loading: true }
        }

        case RECOVERY_RESPONSE: {
            return { ...state, loading: false }
        }
        case RECOVERY_ERROR: {
            return { ...state, loading: false }
        }
        case RESET_REQUEST: {
            return { ...state, loading: true }
        }

        case RESET_RESPONSE: {
            return { ...state, loading: false }
        }
        case RESET_ERROR: {
            return { ...state, loading: false }
        }


        default:
            return state;
    }
}


export default auth;

