import { User } from '../types';
export interface LoginValues {
    email?: string;
    password?: string;
}

export interface ResponseLogin {
    user: User,
    token: string
}