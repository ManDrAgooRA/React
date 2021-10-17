import React from "react";

export const Context = React.createContext()

export const ContextProvider = ({ children, value: { state, dispatch } }) => {

    return (
        <Context.Provider value={{ state, dispatch }}>

            {children}

        </Context.Provider >
    )
}