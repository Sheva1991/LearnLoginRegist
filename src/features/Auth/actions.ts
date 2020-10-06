import { Action } from 'redux'
import { ThunkAction } from "redux-thunk";
import {
    LOGIN_ERROR,
    LOGIN_REQUEST,
    LOGIN_RESPONSE,
    REGISTRATE_ERROR,
    REGISTRATE_REQUEST,
    REGISTRATE_RESPONSE,
    LOGOUT_REQUEST,
    VERIFY_REQUEST,
    AUTHORIZE_REQUEST,
    AUTHORIZE_ERROR,
    AUTHORIZE_RESPONSE
} from './constants'
import { createAction, createActionWithPayload } from "utils/redux";
import { RootState } from "app/store";
import instance from 'api';
import { LoginValues, RegistrateValues, ResponseLogin, ResponseRegistrate, UserType, ResponseAuthorize } from './types';

export const loginRequest = createAction<typeof LOGIN_REQUEST>(LOGIN_REQUEST);
export const loginError = createAction<typeof LOGIN_ERROR>(LOGIN_ERROR);
export const loginResponse = createActionWithPayload<typeof LOGIN_RESPONSE, ResponseLogin>(LOGIN_RESPONSE);
export const authorizeRequest = createAction<typeof AUTHORIZE_REQUEST>(AUTHORIZE_REQUEST);
export const authorizeError = createAction<typeof AUTHORIZE_ERROR>(AUTHORIZE_ERROR);
export const authorizeResponse = createActionWithPayload<typeof AUTHORIZE_RESPONSE, ResponseAuthorize>(AUTHORIZE_RESPONSE);
export const registrateRequest = createAction<typeof REGISTRATE_REQUEST>(REGISTRATE_REQUEST);
export const registrateError = createAction<typeof REGISTRATE_ERROR>(REGISTRATE_ERROR);
export const registrateResponse = createActionWithPayload<typeof REGISTRATE_RESPONSE, ResponseRegistrate>(REGISTRATE_RESPONSE);
export const logoutRequest = createAction<typeof LOGOUT_REQUEST>(LOGOUT_REQUEST);
export const verifyRequest = createAction<typeof VERIFY_REQUEST>(VERIFY_REQUEST);


export const authorize = (token: string, onSuccess: Function): ThunkAction<void, RootState, unknown, Action<any>> => async (dispatch) => {
    dispatch(authorizeRequest())
    try {
        const { data: { data } } = await instance.get<{ data: { id: number, email: string, verified: boolean } }>(`auth/authorize`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        dispatch(authorizeResponse(data));
        onSuccess()
    } catch {
        dispatch(authorizeError())
    }
}

export const login = (formData: LoginValues, onSuccess: Function): ThunkAction<void, RootState, unknown, Action<any>> => async dispatch => {
    dispatch(loginRequest())
    try {
        const { data: { data } } = await instance.post<{ data: { user: UserType, token: string } }>(`auth/login`, {
            ...formData
        });
        dispatch(loginResponse(data));
        localStorage.setItem('token', data.token)
        onSuccess()
    } catch {
        dispatch(loginError())
    }
}

export const verifyAccount = (): ThunkAction<void, RootState, unknown, Action<any>> => async (dispatch) => {

}
export const logout = (): ThunkAction<void, RootState, unknown, Action<any>> => async (dispatch) => {
    dispatch(logoutRequest());
    localStorage.removeItem('token')
}

export const registrate = (formData: RegistrateValues, onSuccess: Function): ThunkAction<void, RootState, unknown, Action<any>> => async dispatch => {
    dispatch(registrateRequest())
    try {
        const { data } = await instance.post<{ data: UserType, meta: null, code: number }>(`auth/register`, {
            ...formData
        });
        dispatch(registrateResponse(data));

        onSuccess()
    } catch (e) {
        console.log(e)
        dispatch(registrateError())
    }
}

export type AuthActions =
    | ReturnType<typeof loginRequest>
    | ReturnType<typeof loginError>
    | ReturnType<typeof loginResponse>
    | ReturnType<typeof authorizeRequest>
    | ReturnType<typeof authorizeError>
    | ReturnType<typeof authorizeResponse>
    | ReturnType<typeof registrateRequest>
    | ReturnType<typeof registrateError>
    | ReturnType<typeof registrateResponse>
    | ReturnType<typeof logoutRequest>
    | ReturnType<typeof verifyRequest>