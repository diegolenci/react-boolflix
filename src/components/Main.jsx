import { useGlobalContext } from "../context/GlobalContext"

export function Main(){

    const { movies, tvs } = useGlobalContext()

    return(
        <main>
            <h2>Films</h2>
            <ul>
                {
                    movies.map( (elem) => {
                        return(
                            <li key={elem.id}>
                                {elem.title} - {elem.original_language} - {elem.original_title} - {Math.ceil(elem.vote_average / 2)}
                            </li>
                        )
                    })
                }
            </ul>
            
            <h2>Serie tv</h2>
            <ul>
                {
                    tvs.map( (elem) => {
                        return(
                            <li key={elem.id}>
                                {elem.name}
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    )
}