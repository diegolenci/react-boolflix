import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { GlobalProvider } from "./context/GlobalContext"

const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=1bb80835710cfd4c04e384c234391bbc'


function App() {
  
  return (
    <>
      <GlobalProvider>
        <Header/>
        <Main/>
      </GlobalProvider>
    </>
  )
}

export default App
