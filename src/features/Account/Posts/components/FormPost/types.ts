import { Post } from "../../PostList/types";

export interface PropsType {
    action: (data: Post, id?: number) => void,
    data?: Post | null,
    id?: number,
    modalClose?: (value: boolean) => void
}