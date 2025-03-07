import { createContext, useState, useContext } from "react";
import axios from "axios";

const GlobalContext = createContext()

const GlobalProvider = ({children}) => {

    const [query, setQuery] = useState('')

    const HandleSubmit = (e) => {
        e.preventDefault()
        console.log(query)
    }

    const value = {
        query,
        HandleSubmit
    }

    return(
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => useContext( GlobalContext )

export {
    GlobalProvider,
    useGlobalContext
}