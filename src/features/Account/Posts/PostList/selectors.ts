import { RootState } from 'app/store';

export const selectData = (state: RootState) => state.posts.data
export const selectFetching = (state: RootState) => state.posts.fetching
export const selectTotalPosts = (state: RootState) => state.posts.meta?.total
export const selectPerPage = (state: RootState) => state.posts.meta?.per_page
