import { Post } from './../types';
export interface PropsType {
    action: (data: Post, id?: number) => void,
    data?: Post | null,
    id?: number
}