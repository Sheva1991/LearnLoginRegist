export interface AuthState {
    user: UserType,
    token: null | string,
    loading: boolean,
    error: string | null
}

export interface UserType {
    id: number | null,
    email: string,
    verified: boolean
}

export interface LoginValues {
    email: string,
    password: string
}
export interface RegistrateValues {
    email: string,
    password: string,
    password_confirmation: string
}

export interface ResponseLogin {
    user: UserType,
    token: string
}
export interface ResponseRegistrate {
    data: any
}