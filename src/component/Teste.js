import React, { createContext } from "react";

const Context = createContext({
    counter: 1
})

export default function Component () {

    const { counter } = useContext(Context);

    return <Context.Provider>
        {counter}
    </Context.Provider>
}