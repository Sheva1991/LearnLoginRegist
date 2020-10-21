import { Action } from 'redux'
import { ThunkAction } from "redux-thunk";
import {
    FETCH_ERROR,
    FETCH_REQUEST,
    FETCH_RESPONSE
} from './constants'
import { createAction, createActionWithPayload } from "utils/redux";
import { RootState } from "app/store";
import { APIBASE } from '../../../../api/api';
import { ResponsePosts } from './types';
import { addPostRequest, addPostResponse, addPostError } from './AddPost/actions';

export const fetchRequest = createAction<typeof FETCH_REQUEST>(FETCH_REQUEST);
export const fetchError = createAction<typeof FETCH_ERROR>(FETCH_ERROR);
export const fetchResponse = createActionWithPayload<typeof FETCH_RESPONSE, ResponsePosts>(FETCH_RESPONSE);


export const fetchPosts = (page: number, per_page: number): ThunkAction<void, RootState, unknown, Action<any>> => async dispatch => {
    dispatch(fetchRequest())
    try {
        const { data } = await APIBASE.get<ResponsePosts>(`posts`, {
            params: {
                page,
                per_page
            }
        });
        dispatch(fetchResponse(data));
    } catch {
        dispatch(fetchError())
    }
}


export type PostActions =
    | ReturnType<typeof fetchRequest>
    | ReturnType<typeof fetchError>
    | ReturnType<typeof fetchResponse>
    | ReturnType<typeof addPostRequest>
    | ReturnType<typeof addPostResponse>
    | ReturnType<typeof addPostError>