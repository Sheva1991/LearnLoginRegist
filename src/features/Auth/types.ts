export interface AuthState {
    user: User | null,
    token: null | string,
    loading: boolean,
    error: string | null
}

export interface User {
    id: number | null,
    email: string,
    verified: boolean
}

export interface ResponseLogout {
    success: boolean
}


