import { Post } from './../PostList/types';

export interface PostDetailsState {
    data: Post | null,
    fetching: boolean,
    error: boolean
}
