import { Action } from 'redux'
import { ThunkAction } from "redux-thunk";
import {
    FETCH_USER_PROFILE_ERROR,
    FETCH_USER_PROFILE_REQUEST,
    FETCH_USER_PROFILE_RESPONSE
} from './constants'
import { createAction, createActionWithPayload } from "utils/redux";
import { RootState } from "app/store";
import API from 'api/api';
import { FullProfile } from '../../../../../types/types';
export const fetchUserProfileRequest = createAction<typeof FETCH_USER_PROFILE_ERROR>(FETCH_USER_PROFILE_ERROR);
export const fetchUserProfileError = createAction<typeof FETCH_USER_PROFILE_REQUEST>(FETCH_USER_PROFILE_REQUEST);
export const fetchUserProfileResponse = createActionWithPayload<typeof FETCH_USER_PROFILE_RESPONSE, FullProfile>(FETCH_USER_PROFILE_RESPONSE);


export const fetchUserProfile = (id: number): ThunkAction<void, RootState, unknown, Action<any>> => async dispatch => {
    dispatch(fetchUserProfileRequest())
    try {
        const { data } = await API.get<FullProfile>(`profile/${id}`);
        dispatch(fetchUserProfileResponse(data));
    } catch {
        dispatch(fetchUserProfileError())
    }
}

export type userProfileActions =
    | ReturnType<typeof fetchUserProfileRequest>
    | ReturnType<typeof fetchUserProfileError>
    | ReturnType<typeof fetchUserProfileResponse>