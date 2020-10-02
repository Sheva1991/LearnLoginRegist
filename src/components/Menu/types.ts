export interface PropsType {
    items: ItemData[],
    onClick?: (event: React.MouseEvent<HTMLElement>) => void,
    adaptiveOn?: boolean
}

interface ItemData {
    key: string,
    value: string
}