export default function Grid({children, className, ...props}) {
    return (
        <div className={"flex flex-row flex-wrap justify-center bg-purple-600 " + className} {...props}>
            {children}
        </div>
    )
}