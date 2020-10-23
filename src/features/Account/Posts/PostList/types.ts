export interface Post {
    id?: number,
    image?: string,
    name?: string,
    text?: string,
    created_at?: string
}

export interface PostState {
    data: Post[] | null,
    pagination: {
        per_page: number,
        total: number,
        currentPage: number
    }
    fetching: boolean,
    error: boolean,
}

export interface ResponsePosts {
    data: Post[] | null,
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

