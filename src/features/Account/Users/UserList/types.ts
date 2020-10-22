export interface User {
    id: number,
    profile: Profile,
    posts_count: number
}

export interface UsersState {
    data: User[] | null,
    pagination: {
        per_page: number,
        total: number,
    }
    fetching: boolean,
    error: boolean
}

export interface Profile {
    id: number,
    name: string | null,
    surname: string | null,
    avatar: string | null
}

export interface ResponseUsers {
    data: User[] | null,
    links: Links,
    meta: Meta
}

export interface Links {
    first: string | null,
    last: string | null,
    next: string | null,
    prev: string | null,
}

export interface Meta {
    current_page: number
    from: number
    last_page: number,
    links: LinkDatail,
    path: string,
    per_page: number,
    to: number,
    total: number
}
export interface LinkDatail {
    url: string | null,
    label: string,
    active: boolean
}


