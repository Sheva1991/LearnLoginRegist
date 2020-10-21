import { FullProfile } from '../../../../types/types';


export interface UserDetailsState {
    id: number | null,
    profile: FullProfile | null,
    posts_count: number | null,
    fetching: boolean,
    error: boolean
}

export interface ResponseUserDetails {
    id: number | null,
    profile: FullProfile | null,
    posts_count: number | null,
}