import { Action } from 'redux'
import { ThunkAction } from "redux-thunk";
import {
    FETCH_ERROR,
    FETCH_REQUEST,
    FETCH_RESPONSE
} from './constants'
import { User } from './types';
import { createAction, createActionWithPayload } from "utils/redux";
import { RootState } from "app/store";
import API from 'api/api';
export const fetchRequest = createAction<typeof FETCH_REQUEST>(FETCH_REQUEST);
export const fetchError = createAction<typeof FETCH_ERROR>(FETCH_ERROR);
export const fetchResponse = createActionWithPayload<typeof FETCH_RESPONSE, User[]>(FETCH_RESPONSE);


export const fetchUsers = (): ThunkAction<void, RootState, unknown, Action<any>> => async dispatch => {
    dispatch(fetchRequest())
    try {
        const { data } = await API.get<User[]>(`users`);
        dispatch(fetchResponse(data));
    } catch {
        dispatch(fetchError())
    }
}

export type UsersActions =
    | ReturnType<typeof fetchRequest>
    | ReturnType<typeof fetchError>
    | ReturnType<typeof fetchResponse>