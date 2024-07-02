import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./index.css"
import Card from "./Card"
import flower1 from "/flower.jpg"
import Grid from "./Grid"
import Presentation from "./Presentation"
import flowers from "./flowers"

function App() {
    const [selectedId, setSelectedId] = useState(0)

    return (
        <>
            <h1 className="text-center font-semibold text-gray-950 text-4xl m-16">
                Цветы - это прекрасно
            </h1>

            <Grid className="bg-purple-400 shadow-xl rounded-xl">
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
