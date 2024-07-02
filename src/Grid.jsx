export default function Grid({children, className, ...props}) {
    return (
        <div className={"grid-container " + className} {...props}>
            {children}
        </div>
    )
}