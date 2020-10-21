import { Post } from '../types';
import { Action } from 'redux'
import { ThunkAction } from "redux-thunk";
import {
    ADD_POST_ERROR,
    ADD_POST_REQUEST,
    ADD_POST_RESPONSE
} from '../constants'
import { createAction, createActionWithPayload } from "utils/redux";
import { RootState } from "app/store";
import API from 'api/api';
import { getFiniteValue } from '../../../../../utils/helpersFunc';

export const addPostRequest = createAction<typeof ADD_POST_REQUEST>(ADD_POST_REQUEST);
export const addPostError = createAction<typeof ADD_POST_ERROR>(ADD_POST_ERROR);
export const addPostResponse = createActionWithPayload<typeof ADD_POST_RESPONSE, Post>(ADD_POST_RESPONSE);


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


