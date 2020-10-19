import { Action } from 'redux'
import { ThunkAction } from "redux-thunk";

import { createAction, createActionWithPayload } from "utils/redux";
import { RootState } from "app/store";
import API from 'api/api';
import { FullProfile } from '../../../../types/types';
import { EDIT_PROFILE_ERROR, EDIT_PROFILE_REQUEST, EDIT_PROFILE_RESPONSE } from '../../../Auth/constants';



export const editProfileRequest = createAction<typeof EDIT_PROFILE_ERROR>(EDIT_PROFILE_ERROR);
export const editProfileError = createAction<typeof EDIT_PROFILE_REQUEST>(EDIT_PROFILE_REQUEST);
export const editProfileResponse = createActionWithPayload<typeof EDIT_PROFILE_RESPONSE, FullProfile>(EDIT_PROFILE_RESPONSE);


export const editProfile = (values: FullProfile, onSuccess: Function): ThunkAction<void, RootState, unknown, Action<any>> => async dispatch => {
    dispatch(editProfileRequest())
    try {
        const { data } = await API.put<FullProfile>(`profile`, values);
        dispatch(editProfileResponse(data));
        onSuccess()
    } catch {
        dispatch(editProfileError())
    }
}
