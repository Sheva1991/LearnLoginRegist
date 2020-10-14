export interface ChangePasswordFormValues {
    password?: string;
    password_confirmation?: string
}
export interface ChangePasswordValues {
    password?: string;
    password_confirmation?: string,
    token: string,
    email: string

}
export interface PropsType {
    password: string
}