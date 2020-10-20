import { RootState } from 'app/store';

export const selectData = (state: RootState) => state.users.data
export const selectFetching = (state: RootState) => state.users.fetching
