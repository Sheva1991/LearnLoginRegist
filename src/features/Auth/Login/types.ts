import { AuthUser } from '../types';
export interface LoginValues {
    email?: string;
    password?: string;
}

export interface ResponseLogin {
    user: AuthUser,
    token: string
}