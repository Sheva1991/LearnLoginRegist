import { RootState } from 'app/store';

export const selectUserFullProfile = (state: RootState) => state.userDetails.profile
export const selectUserCountPosts = (state: RootState) => state.userDetails.posts_count
export const selectError = (state: RootState) => state.userDetails.error