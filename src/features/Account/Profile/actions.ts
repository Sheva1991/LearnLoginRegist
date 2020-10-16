import { Action } from 'redux'
import { ThunkAction } from "redux-thunk";
import {
    FETCH_PROFILE_ERROR,
    FETCH_PROFILE_REQUEST,
    FETCH_PROFILE_RESPONSE
} from './constants'
import { createAction, createActionWithPayload } from "utils/redux";
import { RootState } from "app/store";
import API from 'api/api';
import { FullProfile } from '../../../types/types';
import { editProfileRequest, editProfileError, editProfileResponse } from './components/ProfileEdit/actions';

export const fetchProfileRequest = createAction<typeof FETCH_PROFILE_ERROR>(FETCH_PROFILE_ERROR);
export const fetchProfileError = createAction<typeof FETCH_PROFILE_REQUEST>(FETCH_PROFILE_REQUEST);
export const fetchProfileResponse = createActionWithPayload<typeof FETCH_PROFILE_RESPONSE, FullProfile>(FETCH_PROFILE_RESPONSE);


export const fetchProfile = (): ThunkAction<void, RootState, unknown, Action<any>> => async dispatch => {
    dispatch(fetchProfileRequest())
    try {
        const { data } = await API.get<FullProfile>(`profile`);
        dispatch(fetchProfileResponse(data));
    } catch {
        dispatch(fetchProfileError())
    }
}


export type profileActions =
    | ReturnType<typeof fetchProfileRequest>
    | ReturnType<typeof fetchProfileError>
    | ReturnType<typeof fetchProfileResponse>
    | ReturnType<typeof editProfileRequest>
    | ReturnType<typeof editProfileError>
    | ReturnType<typeof editProfileResponse>