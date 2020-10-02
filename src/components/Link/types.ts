
export type PropsType = {
    link: string,
    title?: string,
    component?: React.FC,
    className?: string,
    onClick?: (event: React.MouseEvent<HTMLElement>) => void,
}
