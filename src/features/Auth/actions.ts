import { Action } from 'redux'
import { ThunkAction } from "redux-thunk";
import {
    LOGOUT_REQUEST,
    LOGOUT_ERROR,
    LOGOUT_RESPONSE,
    AUTHORIZE_REQUEST,
    AUTHORIZE_ERROR,
    AUTHORIZE_RESPONSE
} from './constants'
import { createAction, createActionWithPayload } from "utils/redux";
import { RootState } from "app/store";
import API from 'api/api';
import { ResponseLogout } from './types';
import { loginRequest, loginError, loginResponse } from './Login/actions';
import { registrateRequest, registrateError, registrateResponse } from './Registration/actions';
import { verifyRequest, verifyError, verifyResponse } from './Verify/actions';
import { AuthUser } from './types';

export const authorizeRequest = createAction<typeof AUTHORIZE_REQUEST>(AUTHORIZE_REQUEST);
export const authorizeError = createAction<typeof AUTHORIZE_ERROR>(AUTHORIZE_ERROR);
export const authorizeResponse = createActionWithPayload<typeof AUTHORIZE_RESPONSE, AuthUser>(AUTHORIZE_RESPONSE);
export const logoutRequest = createAction<typeof LOGOUT_REQUEST>(LOGOUT_REQUEST);
export const logoutError = createAction<typeof LOGOUT_ERROR>(LOGOUT_ERROR);
export const logoutResponse = createActionWithPayload<typeof LOGOUT_RESPONSE, ResponseLogout>(LOGOUT_RESPONSE);


export const authorize = (): ThunkAction<void, RootState, unknown, Action<any>> => async (dispatch) => {
    dispatch(authorizeRequest())
    try {
        const { data } = await API.get<AuthUser>(`auth/authorize`);
        dispatch(authorizeResponse(data));
    } catch {
        dispatch(authorizeError())
    }
}

export const logout = (): ThunkAction<void, RootState, unknown, Action<any>> => async (dispatch) => {
    dispatch(logoutRequest())
    try {
        const { data } = await API.get<ResponseLogout>(`auth/logout`);
        dispatch(logoutResponse(data));
    } catch {
        dispatch(logoutError())
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
    | ReturnType<typeof logoutError>
    | ReturnType<typeof logoutResponse>
    | ReturnType<typeof verifyRequest>
    | ReturnType<typeof verifyError>
    | ReturnType<typeof verifyResponse>