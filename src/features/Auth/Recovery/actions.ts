import { Action } from 'redux'
import { ThunkAction } from "redux-thunk";
import {
    RECOVERY_ERROR,
    RECOVERY_REQUEST,
    RECOVERY_RESPONSE,
} from '../constants'
import { createAction, createActionWithPayload } from "utils/redux";
import { RootState } from "app/store";
import API from 'api/api';
import { RecoveryValues } from './types';
import { ResponseSuccess } from '../../../types/types';


export const recoveryRequest = createAction<typeof RECOVERY_REQUEST>(RECOVERY_REQUEST);
export const recoveryError = createAction<typeof RECOVERY_ERROR>(RECOVERY_ERROR);
export const recoveryResponse = createActionWithPayload<typeof RECOVERY_RESPONSE, ResponseSuccess>(RECOVERY_RESPONSE);

export const recovery = (values: RecoveryValues): ThunkAction<void, RootState, unknown, Action<any>> => async dispatch => {
    dispatch(recoveryRequest())
    try {
        const { data } = await API.post<ResponseSuccess>(`auth/password-recovery`, values);
        dispatch(recoveryResponse(data));
    } catch {
        dispatch(recoveryError())
    }
}
