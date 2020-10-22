import { Action } from 'redux'
import { ThunkAction } from "redux-thunk";
import { AUTHORIZE_REQUEST, AUTHORIZE_ERROR, AUTHORIZE_RESPONSE, LOGOUT_REQUEST, LOGOUT_ERROR, LOGOUT_RESPONSE, FETCH_PROFILE_ERROR, FETCH_PROFILE_REQUEST, FETCH_PROFILE_RESPONSE } from './constants';
import { createAction, createActionWithPayload } from "utils/redux";
import { RootState } from "app/store";
import API from 'api/api';
import { loginRequest, loginError, loginResponse } from './Login/actions';
import { registrateRequest, registrateError, registrateResponse } from './Registration/actions';
import { verifyRequest, verifyError, verifyResponse } from './Verify/actions';
import { AuthUser } from './types';
import { recoveryRequest, recoveryError, recoveryResponse } from './Recovery/actions';
import { ResponseSuccess } from 'types/types';
import { resetRequest, resetError, resetResponse } from './ResetPassword/actions';
import { FullProfile } from '../../types/types';
import { editProfileError, editProfileRequest, editProfileResponse } from '../Account/Profile/ProfileEdit/actions';

export const authorizeRequest = createAction<typeof AUTHORIZE_REQUEST>(AUTHORIZE_REQUEST);
export const authorizeError = createAction<typeof AUTHORIZE_ERROR>(AUTHORIZE_ERROR);
export const authorizeResponse = createActionWithPayload<typeof AUTHORIZE_RESPONSE, AuthUser>(AUTHORIZE_RESPONSE);
export const logoutRequest = createAction<typeof LOGOUT_REQUEST>(LOGOUT_REQUEST);
export const logoutError = createAction<typeof LOGOUT_ERROR>(LOGOUT_ERROR);
export const logoutResponse = createAction<typeof LOGOUT_RESPONSE>(LOGOUT_RESPONSE);


export const authorize = (): ThunkAction<void, RootState, unknown, Action<any>> => async (dispatch) => {
    dispatch(authorizeRequest())
    try {
        const { data: { data } } = await API.get<{ data: AuthUser }>(`auth/authorize`);
        dispatch(authorizeResponse(data));
    } catch {
        dispatch(authorizeError())
    }
}

export const logout = (): ThunkAction<void, RootState, unknown, Action<any>> => async (dispatch) => {
    dispatch(logoutRequest())
    try {
        const { data: { data } } = await API.get<{ data: ResponseSuccess }>(`auth/logout`);
        if (data.success) {
            dispatch(logoutResponse());
        } else {
            throw new Error("Some error occured when logout. Try one more time");
        }
    } catch {
        dispatch(logoutError())
    }
}

export const fetchProfileRequest = createAction<typeof FETCH_PROFILE_ERROR>(FETCH_PROFILE_ERROR);
export const fetchProfileError = createAction<typeof FETCH_PROFILE_REQUEST>(FETCH_PROFILE_REQUEST);
export const fetchProfileResponse = createActionWithPayload<typeof FETCH_PROFILE_RESPONSE, FullProfile>(FETCH_PROFILE_RESPONSE);


export const fetchProfile = (): ThunkAction<void, RootState, unknown, Action<any>> => async dispatch => {
    dispatch(fetchProfileRequest())
    try {
        const { data: { data } } = await API.get<{ data: FullProfile }>(`profile`);
        dispatch(fetchProfileResponse(data));
    } catch {
        dispatch(fetchProfileError())
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
    | ReturnType<typeof recoveryRequest>
    | ReturnType<typeof recoveryError>
    | ReturnType<typeof recoveryResponse>
    | ReturnType<typeof resetRequest>
    | ReturnType<typeof resetError>
    | ReturnType<typeof resetResponse>
    | ReturnType<typeof fetchProfileRequest>
    | ReturnType<typeof fetchProfileError>
    | ReturnType<typeof fetchProfileResponse>
    | ReturnType<typeof editProfileRequest>
    | ReturnType<typeof editProfileError>
    | ReturnType<typeof editProfileResponse>