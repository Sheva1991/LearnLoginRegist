export interface User {
    id: number,
    name: string,
    email: string,
    photo?: string
}

export interface UsersState {
    data: User[] | null,
    fetching: boolean,
    error: boolean
}


