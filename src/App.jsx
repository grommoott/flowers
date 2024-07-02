import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./index.css"
import Card from "./Card"
import flower1 from "/flower.jpg"
import Grid from "./Grid"
import Presentation from "./Presentation"
import flowers from "./flowers"
import Decoration from "./Decoration"

function App() {
    const [selectedId, setSelectedId] = useState(0)

    return (
        <>
            <Decoration name="flower1" x="4rem" />
            <Decoration name="thing-down-left" mirrorY={true} />
            <Decoration name="thing-down-right" mirrorY={true} mirrorX={true} />
            <Decoration name="flower2" mirrorY={true} x="4rem" y="20rem" />
            <Decoration name="flower3" mirrorY={true} x="55rem" y="30rem" />
            <Decoration name="underline" x="calc(50% - 196px)" y="6.5rem" />
            <Decoration
                name="exclamation-point"
                x="calc(50% + 14rem)"
                y="1rem"
            />
            <Decoration name="smile)" x="calc(50% - 24rem)" y="1rem" />
            <Decoration name="sun" x="3rem" mirrorX={true} />

            <div className="absolute w-max h-max"></div>

            <h1 className="text-center font-semibold text-gray-950 text-4xl p-16">
                Цветы - это прекрасно
            </h1>

            <Grid className="bg-purple-400 shadow-xl relative overflow-hidden">
                <Decoration name="lines" x="0rem" style={{ zIndex: 0 }} />
                <Decoration name="bubbles" x="0rem" mirrorX={true} style={{ zIndex: 0 }} />
                <Decoration name="ground" mirrorY={true} style={{ zIndex: 0, width: "100%" }}/>
                {flowers.map((val, id) => (
                    <Card
                        name={val.name}
                        format={val.format ? val.format : "jpg"}
                        onClick={() => setSelectedId(id)}
                        selectedId={selectedId}
                        key={id}
                        id={id}
                    />
                ))}
            </Grid>

            <div className="size-20"></div>
            <Presentation selectedId={selectedId} flowers={flowers} />
            <div className="size-20"></div>
        </>
    )
}

export default App
