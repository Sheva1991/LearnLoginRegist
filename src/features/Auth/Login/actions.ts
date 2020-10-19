import { Action } from 'redux'
import { ThunkAction } from "redux-thunk";
import { createAction, createActionWithPayload } from "utils/redux";
import { RootState } from "app/store";
import API from 'api/api';
import { LoginValues, ResponseLogin } from './types';
import { LOGIN_REQUEST, LOGIN_ERROR, LOGIN_RESPONSE } from '../constants';


export const loginRequest = createAction<typeof LOGIN_REQUEST>(LOGIN_REQUEST);
export const loginError = createAction<typeof LOGIN_ERROR>(LOGIN_ERROR);
export const loginResponse = createActionWithPayload<typeof LOGIN_RESPONSE, ResponseLogin>(LOGIN_RESPONSE);


export const login = (values: LoginValues): ThunkAction<void, RootState, unknown, Action<any>> => async dispatch => {
    dispatch(loginRequest())
    try {
        const { data } = await API.post<ResponseLogin>(`auth/login`, values);
        dispatch(loginResponse(data));
        localStorage.setItem('token', data.token)
    } catch {
        dispatch(loginError())
    }
}
