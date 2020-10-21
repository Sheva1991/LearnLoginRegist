import { Action } from 'redux'
import { ThunkAction } from "redux-thunk";
import {
    FETCH_USER_DETAILS_ERROR,
    FETCH_USER_DETAILS_REQUEST,
    FETCH_USER_DETAILS_RESPONSE
} from './constants'
import { createAction, createActionWithPayload } from "utils/redux";
import { RootState } from "app/store";
import API from 'api/api';
import { ResponseUserDetails } from './types';
export const fetchUserDetailsRequest = createAction<typeof FETCH_USER_DETAILS_ERROR>(FETCH_USER_DETAILS_ERROR);
export const fetchUserDetailsError = createAction<typeof FETCH_USER_DETAILS_REQUEST>(FETCH_USER_DETAILS_REQUEST);
export const fetchUserDetailsResponse = createActionWithPayload<typeof FETCH_USER_DETAILS_RESPONSE, ResponseUserDetails>(FETCH_USER_DETAILS_RESPONSE);


export const fetchUserDetails = (id: number): ThunkAction<void, RootState, unknown, Action<any>> => async dispatch => {
    dispatch(fetchUserDetailsRequest())
    try {
        const { data } = await API.get<ResponseUserDetails>(`users/${id}`);
        dispatch(fetchUserDetailsResponse(data));
    } catch {
        dispatch(fetchUserDetailsError())
    }
}

export type userDetailsActions =
    | ReturnType<typeof fetchUserDetailsRequest>
    | ReturnType<typeof fetchUserDetailsError>
    | ReturnType<typeof fetchUserDetailsResponse>