import { useState } from "react"

export function Search(){

    const [query, setQuery] = useState('')


    const HandleSubmit = (e) => {
        e.preventDefault()
        console.log(query)
    }
    
    return(
        <>
            <form onSubmit={e => HandleSubmit(e)}>
                <input type="text" onChange={ e => setQuery( e.target.value )}/>
                <button type="submit">Cerca</button>
            </form>
        </>
    )
}