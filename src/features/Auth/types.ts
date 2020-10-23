import { FullProfile } from '../../types/types';
export interface AuthState {
    user: AuthUser | null,
    token: string | null,
    loading: boolean,
    error: string | null
}

export interface AuthUser {
    id: number,
    email: string,
    verified: boolean,
    profile: FullProfile
}






