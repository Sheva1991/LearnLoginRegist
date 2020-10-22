import { Action } from 'redux'
import { ThunkAction } from "redux-thunk";

import { createAction, createActionWithPayload } from "utils/redux";
import { RootState } from "app/store";
import API from 'api/api';
import { FullProfile } from '../../../../types/types';
import { EDIT_PROFILE_ERROR, EDIT_PROFILE_REQUEST, EDIT_PROFILE_RESPONSE } from '../../../Auth/constants';
import { getFiniteValue } from '../../../../utils/helpersFunc';
import { FullProfileFormValues } from './types';



export const editProfileRequest = createAction<typeof EDIT_PROFILE_ERROR>(EDIT_PROFILE_ERROR);
export const editProfileError = createAction<typeof EDIT_PROFILE_REQUEST>(EDIT_PROFILE_REQUEST);
export const editProfileResponse = createActionWithPayload<typeof EDIT_PROFILE_RESPONSE, FullProfile>(EDIT_PROFILE_RESPONSE);


export const editProfile = (values: FullProfileFormValues, onSuccess: Function): ThunkAction<void, RootState, unknown, Action<any>> => async dispatch => {
    dispatch(editProfileRequest())
    const formData = getFiniteValue(values)
    try {
        const { data: { data } } = await API.post<{ data: FullProfile }>(`profile`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        dispatch(editProfileResponse(data));
        onSuccess()
    } catch {
        dispatch(editProfileError())
    }
}
