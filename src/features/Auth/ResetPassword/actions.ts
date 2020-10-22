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
import { ResetPasswordValues } from './types';
import { ResponseSuccess } from 'types/types';

export const resetRequest = createAction<typeof RESET_REQUEST>(RESET_REQUEST);
export const resetError = createAction<typeof RESET_ERROR>(RESET_ERROR);
export const resetResponse = createAction<typeof RESET_RESPONSE>(RESET_RESPONSE);


export const resetPassword = (values: ResetPasswordValues): ThunkAction<void, RootState, unknown, Action<any>> => async (dispatch) => {
    dispatch(resetRequest())
    try {
        const { data: { data } } = await API.post<{ data: ResponseSuccess }>(`auth/password-reset`, values);
        if (data.success) {
            dispatch(resetResponse());
        } else {
            throw new Error();
        }
    } catch {
        dispatch(resetError())
    }
}
