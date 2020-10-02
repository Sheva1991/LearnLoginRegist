
export interface PropsType extends React.HTMLAttributes<HTMLHeadingElement> {
    title?: string,
    variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
    className?: string,
    component?: React.ElementType
}
