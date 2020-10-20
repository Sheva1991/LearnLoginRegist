import { FullProfile } from '../../../../types/types';


export interface UserDetailsState {
    data: FullProfile | null,
    fetching: boolean,
    error: boolean
}