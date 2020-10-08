import { Action } from 'redux'
import { ThunkAction } from "redux-thunk";
import {
    LOGOUT_REQUEST,
    VERIFY_REQUEST,
    AUTHORIZE_REQUEST,
    AUTHORIZE_ERROR,
    AUTHORIZE_RESPONSE
} from './constants'
import { createAction, createActionWithPayload } from "utils/redux";
import { RootState } from "app/store";
import API from 'api/api';
import { ResponseAuthorize } from './types';
import { loginRequest, loginError, loginResponse } from './Login/actions';
import { registrateRequest, registrateError, registrateResponse } from './Registration/actions';

export const authorizeRequest = createAction<typeof AUTHORIZE_REQUEST>(AUTHORIZE_REQUEST);
export const authorizeError = createAction<typeof AUTHORIZE_ERROR>(AUTHORIZE_ERROR);
export const authorizeResponse = createActionWithPayload<typeof AUTHORIZE_RESPONSE, ResponseAuthorize>(AUTHORIZE_RESPONSE);
export const logoutRequest = createAction<typeof LOGOUT_REQUEST>(LOGOUT_REQUEST);
export const verifyRequest = createAction<typeof VERIFY_REQUEST>(VERIFY_REQUEST);


export const authorize = (): ThunkAction<void, RootState, unknown, Action<any>> => async (dispatch) => {
    dispatch(authorizeRequest())
    try {
        const { data: { data } } = await API.get<{ data: { id: number, email: string, verified: boolean } }>(`auth/authorize`);
        dispatch(authorizeResponse(data));
    } catch {
        dispatch(authorizeError())
    }
}

export const verifyAccount = (): ThunkAction<void, RootState, unknown, Action<any>> => async (dispatch) => {

}
export const logout = (): ThunkAction<void, RootState, unknown, Action<any>> => async (dispatch) => {
    dispatch(logoutRequest());
    localStorage.removeItem('token')
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