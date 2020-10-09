import { RootState } from 'app/store';

export const selectVerifyied = (state: RootState) => {
    return state.auth.user?.verified;
}
export const selectLoading = (state: RootState) => {
    return state.auth.loading;
}