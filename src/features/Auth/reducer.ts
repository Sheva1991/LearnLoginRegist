import {
    LOGIN_ERROR,
    LOGIN_REQUEST,
    LOGIN_RESPONSE,
    REGISTRATE_ERROR,
    REGISTRATE_REQUEST,
    REGISTRATE_RESPONSE,
    LOGOUT_REQUEST
} from './constants'
import { AuthState } from "./types";
import { AuthActions } from "./actions";


const initialState = {
    user: {
        id: null,
        email: '',
        verified: false
    },
    token: null,
    loading: false,
    error: null
} as AuthState;

const authReducer = (state: AuthState = initialState, action: AuthActions): AuthState => {
    switch (action.type) {
        case LOGIN_REQUEST: {
            return { ...state, loading: true }
        }

        case LOGIN_ERROR: {
            return { ...state, loading: false }
        }

        case LOGIN_RESPONSE: {
            const {
                user,
                token
            } = action.payload
            console.log(user)
            console.log(token)
            return {
                ...state,
                user: user,
                token: token,
                loading: false
            }
        }
        case REGISTRATE_REQUEST: {
            return { ...state, loading: true }
        }

        case REGISTRATE_ERROR: {
            return { ...state, loading: false }
        }

        case REGISTRATE_RESPONSE: {
            return {
                ...state,
                loading: false
            }
        }
        case LOGOUT_REQUEST: {
            return {
                ...state,
                user: {
                    id: null,
                    email: '',
                    verified: false
                },
                token: null,
            }
        }
        default:
            return state;
    }
}


export default authReducer;

