import { RootState } from 'app/store';

export const selectData = (state: RootState) => state.posts.data
export const selectFetching = (state: RootState) => state.posts.fetching
