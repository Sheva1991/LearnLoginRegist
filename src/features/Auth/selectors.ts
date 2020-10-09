import { RootState } from 'app/store';

export const selectToken = (state: RootState) => state.auth.token
export const selectUser = (state: RootState) => state.auth.user
export const selectVerifyied = (state: RootState) => state.auth.user?.verified;
export const selectLoading = (state: RootState) => state.auth.loading;