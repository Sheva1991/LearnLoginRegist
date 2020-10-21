import { Action } from 'redux'
import { ThunkAction } from "redux-thunk";
import {
    FETCH_ERROR,
    FETCH_REQUEST,
    FETCH_RESPONSE,
    ADD_POST_ERROR,
    ADD_POST_REQUEST,
    ADD_POST_RESPONSE
} from './constants'
import { createAction, createActionWithPayload } from "utils/redux";
import { RootState } from "app/store";
import { APIBASE } from '../../../../api/api';
import { ResponsePosts, Post } from './types';
import { getFiniteValue } from '../../../../utils/helpersFunc';
import API from 'api/api';


export const fetchRequest = createAction<typeof FETCH_REQUEST>(FETCH_REQUEST);
export const fetchError = createAction<typeof FETCH_ERROR>(FETCH_ERROR);
export const fetchResponse = createActionWithPayload<typeof FETCH_RESPONSE, ResponsePosts>(FETCH_RESPONSE);
export const addPostRequest = createAction<typeof ADD_POST_REQUEST>(ADD_POST_REQUEST);
export const addPostError = createAction<typeof ADD_POST_ERROR>(ADD_POST_ERROR);
export const addPostResponse = createActionWithPayload<typeof ADD_POST_RESPONSE, Post>(ADD_POST_RESPONSE);



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

export const addPost = (values: Post): ThunkAction<void, RootState, unknown, Action<any>> => async dispatch => {
    dispatch(addPostRequest())
    const formData = getFiniteValue(values)
    try {
        const { data } = await API.post<Post>(`posts`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        dispatch(addPostResponse(data));
    } catch {
        dispatch(addPostError())
    }
}


export type PostActions =
    | ReturnType<typeof fetchRequest>
    | ReturnType<typeof fetchError>
    | ReturnType<typeof fetchResponse>
    | ReturnType<typeof addPostRequest>
    | ReturnType<typeof addPostResponse>
    | ReturnType<typeof addPostError>