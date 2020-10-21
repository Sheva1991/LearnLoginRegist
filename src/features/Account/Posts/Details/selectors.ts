import { RootState } from 'app/store';

export const selectPost = (state: RootState) => state.postDetails.data
export const selectLoading = (state: RootState) => state.postDetails.loading