export interface User {
    id: number,
    name: string,
    email: string,
    photo?: string
}

export interface UsersState {
    data: User[],
    fetching: boolean,
    error: boolean
}

export interface ResponseList<T> {
    data: T[]
}


