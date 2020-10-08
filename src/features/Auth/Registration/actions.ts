import { Action } from 'redux'
import { ThunkAction } from "redux-thunk";
import {
    REGISTRATE_ERROR,
    REGISTRATE_REQUEST,
    REGISTRATE_RESPONSE,
} from '../constants'
import { createAction, createActionWithPayload } from "utils/redux";
import { RootState } from "app/store";
import API from 'api/api';
import { RegistrateValues, ResponseRegistrate, UserType } from '../types';

export const registrateRequest = createAction<typeof REGISTRATE_REQUEST>(REGISTRATE_REQUEST);
export const registrateError = createAction<typeof REGISTRATE_ERROR>(REGISTRATE_ERROR);
export const registrateResponse = createActionWithPayload<typeof REGISTRATE_RESPONSE, ResponseRegistrate>(REGISTRATE_RESPONSE);


export const registrate = (values: RegistrateValues): ThunkAction<void, RootState, unknown, Action<any>> => async dispatch => {
    dispatch(registrateRequest())
    try {
        const { data } = await API.post<{ data: UserType, meta: null, code: number }>(`auth/register`, values);
        dispatch(registrateResponse(data));
    } catch (e) {
        console.log(e)
        dispatch(registrateError())
    }
}
