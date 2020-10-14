import { Action } from 'redux'
import { ThunkAction } from "redux-thunk";
import {
    RECOVERY_ERROR,
    RECOVERY_REQUEST,
    RECOVERY_RESPONSE,
} from '../constants'
import { createAction } from "utils/redux";
import { RootState } from "app/store";
import API from 'api/api';
import { RecoveryValues } from './types';
import { ResponseSuccess } from '../../../types/types';


export const recoveryRequest = createAction<typeof RECOVERY_REQUEST>(RECOVERY_REQUEST);
export const recoveryError = createAction<typeof RECOVERY_ERROR>(RECOVERY_ERROR);
export const recoveryResponse = createAction<typeof RECOVERY_RESPONSE>(RECOVERY_RESPONSE);

export const recovery = (values: RecoveryValues, onSuccess: Function): ThunkAction<void, RootState, unknown, Action<any>> => async dispatch => {
    dispatch(recoveryRequest())
    try {
        const { data } = await API.post<ResponseSuccess>(`auth/password-recovery`, values);
        if (data.success) {
            dispatch(recoveryResponse());
            onSuccess()
        } else {
            throw new Error("Some error occured when sent recovery token on your email. Try one more time");
        }

    } catch {
        dispatch(recoveryError())
    }
}
