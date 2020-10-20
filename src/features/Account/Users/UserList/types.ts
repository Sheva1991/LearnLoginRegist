export interface User {
    id: number,
    profile: Profile
}

export interface UsersState {
    data: User[] | null,
    fetching: boolean,
    error: boolean
}

export interface Profile {
    id: number,
    name: string | null,
    surname: string | null,
    avatar: string | null
}


