import { createContext, useContext, useState } from "react";

const CyclesContext = createContext({} as any)

function NewCycleForm() {
    let { activeCycle, setActiveCycle } = useContext(CyclesContext)

    return (
        <div>
            <h1>NewCycleForm: {activeCycle}</h1>
            <button onClick={() => {
                setActiveCycle(activeCycle + 2)
            }}>Add 2</button>
        </div>
    )
}

function Countdown() {
    const { activeCycle } = useContext(CyclesContext)

    return <h1>Countdown: {activeCycle}</h1>
}

export function Home() {
    const [activeCycle, setActiveCycle] = useState(0)

    return (
        <CyclesContext.Provider value={{ activeCycle, setActiveCycle }}>
            <NewCycleForm />
            <Countdown />
        </CyclesContext.Provider>

    )
}