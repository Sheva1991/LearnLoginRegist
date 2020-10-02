import { Post } from '../PostsPage/types';


export interface User {
    id: number,
    name: string,
    email: string,
    photo: string,
    posts: Array<Post>
}


