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
import { User } from '../types';

export const verifyRequest = createAction<typeof VERIFY_REQUEST>(VERIFY_REQUEST);
export const verifyError = createAction<typeof VERIFY_ERROR>(VERIFY_ERROR);
export const verifyResponse = createActionWithPayload<typeof VERIFY_RESPONSE, User>(VERIFY_RESPONSE);


export const verifyAccount = (hash: string): ThunkAction<void, RootState, unknown, Action<any>> => async (dispatch) => {
    dispatch(verifyRequest())
    try {
        const { data } = await API.get<User>(`auth/email-verify/${hash}`);
        dispatch(verifyResponse(data));
    } catch {
        dispatch(verifyError())
    }
}
