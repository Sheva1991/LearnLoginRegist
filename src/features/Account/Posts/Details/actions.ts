import { Post } from './../PostList/types';
import { Action } from 'redux'
import { ThunkAction } from "redux-thunk";
import {
    FETCH_POST_DETAILS_ERROR,
    FETCH_POST_DETAILS_REQUEST,
    FETCH_POST_DETAILS_RESPONSE
} from './constants'
import { createAction, createActionWithPayload } from "utils/redux";
import { RootState } from "app/store";
import API from 'api/api';
export const fetchPostDetailsRequest = createAction<typeof FETCH_POST_DETAILS_ERROR>(FETCH_POST_DETAILS_ERROR);
export const fetchPostDetailsError = createAction<typeof FETCH_POST_DETAILS_REQUEST>(FETCH_POST_DETAILS_REQUEST);
export const fetchPostDetailsResponse = createActionWithPayload<typeof FETCH_POST_DETAILS_RESPONSE, Post>(FETCH_POST_DETAILS_RESPONSE);


export const fetchPostDetails = (id: number): ThunkAction<void, RootState, unknown, Action<any>> => async dispatch => {
    dispatch(fetchPostDetailsRequest())
    try {
        const { data } = await API.get<Post>(`posts/${id}`);
        dispatch(fetchPostDetailsResponse(data));
    } catch {
        dispatch(fetchPostDetailsError())
    }
}

export type postDetailsActions =
    | ReturnType<typeof fetchPostDetailsRequest>
    | ReturnType<typeof fetchPostDetailsError>
    | ReturnType<typeof fetchPostDetailsResponse>