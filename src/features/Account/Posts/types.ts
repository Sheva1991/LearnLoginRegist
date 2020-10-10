export interface Post {
    id: number,
    title: string,
    body: string
}

export interface PostState {
    data: Post[] | null,
    fetching: boolean,
    error: boolean,
}

