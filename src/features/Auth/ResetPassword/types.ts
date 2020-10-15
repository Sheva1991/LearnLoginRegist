export interface ResetPasswordFormValues {
    password?: string;
    password_confirmation?: string
}
export interface ResetPasswordValues {
    password?: string;
    password_confirmation?: string,
    token: string,
    email: string

}
export interface PropsType {
    password: string
}