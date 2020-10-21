import { RootState } from 'app/store';

export const selectData = (state: RootState) => state.users.data
export const selectFetching = (state: RootState) => state.users.fetching
export const selectTotalUsers = (state: RootState) => state.users.meta?.total
export const selectPerPage = (state: RootState) => state.users.meta?.per_page
