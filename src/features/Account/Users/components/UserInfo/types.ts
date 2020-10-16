import { FullProfile } from '../../../../../types/types';
export interface UserProfileState {
    data: FullProfile | null,
    fetching: boolean,
    error: boolean
}