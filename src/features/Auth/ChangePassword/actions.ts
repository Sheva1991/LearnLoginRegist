import { Action } from 'redux'
import { ThunkAction } from "redux-thunk";
import {
    RESET_REQUEST,
    RESET_ERROR,
    RESET_RESPONSE
} from '../constants'
import { createAction } from "utils/redux";
import { RootState } from "app/store";
import API from 'api/api';
import { ChangePasswordValues } from './types';
import { ResponseSuccess } from 'types/types';

export const resetRequest = createAction<typeof RESET_REQUEST>(RESET_REQUEST);
export const resetError = createAction<typeof RESET_ERROR>(RESET_ERROR);
export const resetResponse = createAction<typeof RESET_RESPONSE>(RESET_RESPONSE);


export const resetPassword = (values: ChangePasswordValues, onSuccess: Function): ThunkAction<void, RootState, unknown, Action<any>> => async (dispatch) => {
    dispatch(resetRequest())
    try {
        const { data } = await API.post<ResponseSuccess>(`auth/password-reset`, values);
        if (data.success) {
            dispatch(resetResponse());
            onSuccess()
        } else {
            throw new Error("Some error occured when reset your password. Try one more time");
        }
    } catch {
        dispatch(resetError())
    }
}
