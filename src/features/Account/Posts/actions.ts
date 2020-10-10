import { Action } from 'redux'
import { ThunkAction } from "redux-thunk";
import {
    FETCH_ERROR,
    FETCH_REQUEST,
    FETCH_RESPONSE
} from './constants'
import { createAction, createActionWithPayload } from "utils/redux";
import { RootState } from "app/store";
import API from 'api/api';
import { Post } from './types';

export const fetchRequest = createAction<typeof FETCH_REQUEST>(FETCH_REQUEST);
export const fetchError = createAction<typeof FETCH_ERROR>(FETCH_ERROR);
export const fetchResponse = createActionWithPayload<typeof FETCH_RESPONSE, Post[]>(FETCH_RESPONSE);


export const fetchPosts = (): ThunkAction<void, RootState, unknown, Action<any>> => async dispatch => {
    dispatch(fetchRequest())
    try {
        const { data } = await API.get<Post[]>(`posts`);
        dispatch(fetchResponse(data));
    } catch {
        dispatch(fetchError())
    }
}


export type PostActions =
    | ReturnType<typeof fetchRequest>
    | ReturnType<typeof fetchError>
    | ReturnType<typeof fetchResponse>