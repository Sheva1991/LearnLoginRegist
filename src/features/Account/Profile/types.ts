import { FullProfile } from '../../../types/types';

export interface ProfileState {
    data: FullProfile | null,
    fetching: boolean,
    error: boolean
}