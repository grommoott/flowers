export default function Decoration({ name, x = 0, y = 0, mirrorX = false, mirrorY = false, className, style }) {
    const _style = {...style}

    if (mirrorX) {
        _style.right = x
    } else {
        _style.left = x
    }

    if (mirrorY) {
        _style.bottom = y
    } else {
        _style.top = y
    }

    return (
        <div>
            <img
                className={"absolute -z-10 " + className}
                style={_style}
                src={`/decorations/${name}.png`}
            />
        </div>
    )
}
