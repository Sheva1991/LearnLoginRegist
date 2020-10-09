import { Action } from 'redux'
import { ThunkAction } from "redux-thunk";
import {
    VERIFY_REQUEST,
    VERIFY_ERROR,
    VERIFY_RESPONSE
} from '../constants'
import { createAction, createActionWithPayload } from "utils/redux";
import { RootState } from "app/store";
import API from 'api/api';
import { ResponseVerify } from '../types';

export const verifyRequest = createAction<typeof VERIFY_REQUEST>(VERIFY_REQUEST);
export const verifyError = createAction<typeof VERIFY_ERROR>(VERIFY_ERROR);
export const verifyResponse = createActionWithPayload<typeof VERIFY_RESPONSE, ResponseVerify>(VERIFY_RESPONSE);


export const verifyAccount = (hash: string): ThunkAction<void, RootState, unknown, Action<any>> => async (dispatch) => {
    dispatch(verifyRequest())
    try {
        const { data: { data } } = await API.get<{ data: { id: number, email: string, verified: boolean } }>(`auth/email-verify/${hash}`);
        dispatch(verifyResponse(data));
    } catch {
        dispatch(verifyError())
    }
}
