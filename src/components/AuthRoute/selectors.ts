import { RootState } from 'app/store';

export const selectToken = (state: RootState) => {
    return state.auth.token;
}
export const selectUser = (state: RootState) => {
    return state.auth.user;
}