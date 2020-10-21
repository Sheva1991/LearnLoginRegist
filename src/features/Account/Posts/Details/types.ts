import { Post } from './../PostList/types';

export interface PostDetailsState {
    data: Post | null,
    loading: boolean,
    error: boolean
}
