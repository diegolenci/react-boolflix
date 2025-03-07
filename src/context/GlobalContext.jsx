import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const GlobalContext = createContext()

const GlobalProvider = ({children}) => {

    //dati .env
    const apikey = import.meta.env.VITE_API_KEY
    const endpoint = import.meta.env.VITE_ENDPOINT

    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])

    const HandleSubmit = (e) => {
        e.preventDefault()

        //'https://api.themoviedb.org/3/discover/movie?api_key=1bb80835710cfd4c04e384c234391bbc'
        axios.get(`${endpoint}movie?api_key=${apikey}`)
        .then( res => setMovies(res.data.results) )
        .catch( err => console.log(err) )

    }

    const value = {
        query,
        setQuery,
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