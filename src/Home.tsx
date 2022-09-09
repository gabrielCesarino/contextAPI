import { createContext, useContext } from "react";

const CyclesContext = createContext({
    activeCycle: 1,
})

function NewCycleForm() {
    let { activeCycle } = useContext(CyclesContext)

    return (
        <div>
            <h1>NewCycleForm: {activeCycle}</h1>
            <button onClick={() => {
                activeCycle = 2
            }}></button>
        </div>
    )
}

function Countdown() {
    const { activeCycle } = useContext(CyclesContext)

    return <h1>Countdown: {activeCycle}</h1>
}

export function Home() {

    return (
        <div>
            <NewCycleForm />
            <Countdown />
        </div>

    )
}